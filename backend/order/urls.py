from django.urls import path
from . import views
from rest_framework.authtoken import views as auth_views  # Import DRF's built-in views for obtaining and refreshing tokens

urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('login/', views.user_login, name='user_login'),
    path('logout/', views.user_logout, name='user_logout'),

    path('order-list/', views.OrderListView.as_view(), name='order-list'),
    path('add-to-cart/', views.AddToCartView.as_view(), name='add-to-cart'),
    path('remove-from-cart/<int:order_item_id>/', views.RemoveFromCartView.as_view(), name='remove-from-cart'),
]
