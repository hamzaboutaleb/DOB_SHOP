from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from django.core.exceptions import ObjectDoesNotExist
from .models import CustomUser
from rest_framework.permissions import IsAuthenticated

# Create your views here.
@api_view(['POST'])
def register_user(request):
    """user registration"""
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    """API view for user login"""
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        if not username:
            return Response({'error': 'Username is required'}, status=status.HTTP_400_BAD_REQUEST)
        if not password:
            return Response({'error': 'Password is required'}, status=status.HTTP_400_BAD_REQUEST)
        #if len(password) < 6:
            #return Response({'error': 'Password must be at least 6 characters long'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'username': user.username, 'token': token.key}, status=status.HTTP_200_OK)

        try:
            user = CustomUser.objects.get(username=username)
            return Response({'error': 'Wrong password'}, status=status.HTTP_401_UNAUTHORIZED)
        except CustomUser.DoesNotExist:
            return Response({'error': 'Wrong username'}, status=status.HTTP_401_UNAUTHORIZED)
        #return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    """user logout"""
    if request.method == 'POST':
        try:
            request.auth.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    #if request.method == 'POST':
        #return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderItemSerializer, OrderSerializer
from .models import Order, OrderItem

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from products.models import Product
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

class OrderListView(ListAPIView):
    """list order"""
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        # Define the queryset to retrieve orders and related order items
        queryset = Order.objects.all().prefetch_related('items')
        return queryset

class AddToCartView(APIView):
    """add items to order"""
    permission_classes = [IsAuthenticated]
    def post(self, request):
        product_id = request.data.get('product')  # Get the product ID from the request data
        quantity = request.data.get('quantity')

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        # Retrieve the user's current order or create a new one
        user = self.request.user
        order, created = Order.objects.get_or_create(user=user, status='pending')

        price = product.price  # Get the price from the product model

        # Check if the product is already in the cart, update quantity if so
        existing_item = order.items.filter(product=product).first()
        if existing_item:
            existing_item.quantity += quantity
            existing_item.save()
        else:
            # Create a new order item with product details
            OrderItem.objects.create(order=order, product=product, quantity=quantity, price=price)
        
        # Update the total amount for the order
        order.total_amount = sum(item.total_price() for item in order.items.all())
        order.save()

        return Response({'message': 'Product added to cart successfully'}, status=status.HTTP_201_CREATED)


class RemoveFromCartView(APIView):
    """delete items from the cart"""
    permission_classes = [IsAuthenticated]
    def delete(self, request, order_item_id):
        try:
            order_item = OrderItem.objects.get(id=order_item_id)
        except OrderItem.DoesNotExist:
            return Response({'message': 'Order item not found'}, status=status.HTTP_404_NOT_FOUND)

        order = order_item.order

        # Remove the order item from the cart
        order_item.delete()

        # Update the total amount for the order
        order.total_amount = sum(item.total_price() for item in order.items.all())
        order.save()

        return Response({'message': 'Product removed from the cart'}, status=status.HTTP_204_NO_CONTENT)

class CheckoutView(APIView):
    """checkout view using a Cash on Delivery"""
    permission_classes = [IsAuthenticated]
    def post(self, request):
        user = self.request.user
        order = Order.objects.filter(user=user, status='pending').first()

        if not order:
            return Response({'message': 'No pending order to checkout'}, status=status.HTTP_400_BAD_REQUEST)

        order.status = 'completed'
        order.save()

        return Response({'message': 'Checkout successful'}, status=status.HTTP_200_OK)
