from rest_framework import serializers
from .models import Category, Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ("id", "image", "thumbnail", "get_image", "get_thumbnail")

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    # Use image.url and thumbnail.url to include image URLs
    primary_image = serializers.SerializerMethodField()
    primary_thumbnail = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ("id", "name", "description", "slug", "price", "primary_image", "primary_thumbnail", "images", "get_absolute_url")
    
    def get_primary_image(self, obj):
        return obj.primary_image.url if obj.primary_image else None

    def get_primary_thumbnail(self, obj):
        return obj.primary_thumbnail.url if obj.primary_thumbnail else None

class CategorySerializer(serializers.ModelSerializer):
    products =  ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = ("id", "name", "products", "get_absolute_url")

