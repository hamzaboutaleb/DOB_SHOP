
from django.http import Http404
from .serializers import ProductSerializer, CategorySerializer, ProductImageSerializer
from .models import Product, Category, ProductImage

from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.decorators import api_view
from django.db.models import Q

class ProductsList(APIView):
    """List all products and create a new product"""
    def get(self, request, format=None):
        """get a list of all products"""
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)     

class ProductDetail(APIView):
    """Retrieve, update, or delete a product"""
    def get_object(self, category_slug, product_slug):
        """Retrieve a product of a category"""
        try:
            category = Category.objects.get(slug=category_slug)
            return Product.objects.get(category=category, slug=product_slug)
        except (Product.DoesNotExist, Category.DoesNotExist):
            raise Http404

    def get(self, request, category_slug, product_slug, format=None):
        """get a single product"""
        product = self.get_object(category_slug, product_slug)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
class ProductDetailBySlug(APIView):
    """retrieve product by its slug only"""
    def get_object(self, product_slug):
        try:
            return Product.objects.get(slug=product_slug)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, product_slug, format=None):
        product = self.get_object(product_slug)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

class CategoryList(APIView):
    """list all categories"""
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)   
    
class CategoryDetail(APIView):
    """View a category"""
    def get(self, request, category_slug, format=None):
        """Retrieve a category object"""
        try:
            category = Category.objects.get(slug=category_slug)
        except Category.DoesNotExist:
            raise Http404
        serializer = CategorySerializer(category)
        return Response(serializer.data)

class ProductImagesList(APIView):
    def get(self, request, product_slug):
        """Retrieve the images associated with a specific product."""
        try:
            product_images = ProductImage.objects.filter(product__slug=product_slug)
            serializer = ProductImageSerializer(product_images, many=True)
            return Response(serializer.data)
        except ProductImage.DoesNotExist:
            raise Http404
        
class ProductImageDetail(APIView):
    def get(self, request, product_slug, image_id):
        try:
            product_image = ProductImage.objects.get(product__slug=product_slug, id=image_id)
            serializer = ProductImageSerializer(product_image)
            return Response(serializer.data)
        except ProductImage.DoesNotExist:
            raise Http404
        
@api_view(['POST'])
def search(request):
    """Add search functionality by product name category price"""
    query = request.data.get('query', '')
    min_price = request.data.get('min_price', None)
    max_price = request.data.get('max_price', None)
    category = request.data.get('category', '')

    base_query = Q()

    if query:
        base_query &= Q(name__icontains=query) | Q(description__icontains=query)
    
    if min_price is not None:
        base_query &= Q(price__gte=min_price)
    if max_price is not None:
        base_query &= Q(price__lte=max_price)
    if category:
        base_query &= Q(category__name=category)    

    products = Product.objects.filter(base_query)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
