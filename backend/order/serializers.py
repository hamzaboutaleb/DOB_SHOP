from rest_framework import serializers
from .models import CustomUser, Order, OrderItem
from products.serializers import ProductSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name', 'adress', 'city']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """cerating new user account"""
        user = CustomUser.objects.create_user(
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password']
        )
        return user
    


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer() 

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'total_price']
        read_only_fields = ['price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True) 

    class Meta:
        model = Order
        fields = ['id', 'user', 'created_at', 'status', 'total_amount', 'items']
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order