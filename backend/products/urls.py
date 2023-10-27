from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.ProductsList.as_view(), name='products-list'),
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view(), name='product-detail'),
    path('categories/', views.CategoryList.as_view(), name='category-list'),
    path('categories/<slug:category_slug>/', views.CategoryDetail.as_view(), name='category-detail'),
    path('products/<slug:product_slug>/images/', views.ProductImagesList.as_view(), name='product-images-list'),
    path('products/<slug:product_slug>/images/<int:image_id>/', views.ProductImageDetail.as_view(), name='product-image-detail'),
    path('products/search/', views.search, name='search'),
]
