from rest_framework import serializers
from .models import Category, Product, ProductImage, ProductReview

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ("id", "image", "thumbnail", "get_image", "get_thumbnail")

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    # Use image.url and thumbnail.url to include image URLs
    primary_image = serializers.SerializerMethodField()
    primary_thumbnail = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ("id", "name", "description", "slug", "price", "primary_image", "primary_thumbnail", "images", "get_absolute_url", "average_rating")
    
    def get_primary_image(self, obj):
        return obj.primary_image.url if obj.primary_image else None

    def get_primary_thumbnail(self, obj):
        return obj.primary_thumbnail.url if obj.primary_thumbnail else None
    
    def get_average_rating(self, obj):
        return obj.average_rating()

class CategorySerializer(serializers.ModelSerializer):
    products =  ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = ("id", "name", "slug", "products", "get_absolute_url")

class ProductReviewSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    
    class Meta:
        model = ProductReview
        fields = ['id', 'rating', 'description', 'username', 'created_at']
        read_only_fields = ['product', 'user']

    def create(self, validated_data):
        product = validated_data['product']
        user = validated_data['user']
        rating = validated_data['rating']
        description = validated_data['description']
        
        product_review = ProductReview.objects.create(product=product, user=user, rating=rating, description=description)
        
        return product_review
