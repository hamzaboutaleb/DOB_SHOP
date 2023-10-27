from django.db import models
#from django.urls import reverse

from io import BytesIO
from PIL import Image
from django.core.files import File

class Category(models.Model):
    """ define category model """
    name = models.CharField(max_length=255)
    slug = models.SlugField()

    class Meta:
        """defines meta option for category model"""
        ordering = ('name',)

    def __str__(self):
        """str representation of category's instances"""
        return self.name
    
    def get_absolute_url(self):
        """Generates URLs for objects"""
        return f'/{self.slug}/'
        #return reverse('category_detail', args=[str(self.slug)])

class Product(models.Model):
    """Product model"""
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='uploads/thumbnails/', blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        """ Defines meta option for product model"""
        ordering = ('-date_added',)

    def __str__(self):
        """ string represention of product model"""
        return self.name
    
    def get_absolute_url(self):
        """generate url for product object"""
        return f'/{self.category.slug}/{self.slug}/'
        #return reverse('product_detail', args=[str(self.category.slug), str(self.slug)])

    @property
    def primary_image(self):
        if self.images.first():
            return self.images.first().image
        else:
            return self.image
        return ''

    @property
    def primary_thumbnail(self):
        if self.images.first():
            return self.images.first().thumbnail
        elif self.thumbnail:
            return self.thumbnail
        return ''

class ProductImage(models.Model):
    """Additional images for a product instance"""
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='uploads/thumbnails/', blank=True, null=True)

    def __str__(self):
        """string representations of image model"""
        return f"Image for {self.product.name}"
    
    def get_image(self):
        """Defines images related to specific product"""
        if self.image:
            return self.image.url
        return ''
    
    def get_thumbnail(self):
        """"""
        if self.thumbnail:
            return self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
                return  self.thumbnail.url
            else:
                return ''
        
    def make_thumbnail(self, image, size=(300, 200)):
        """"""
        img = Image.open(image)
        img = img.convert('RGB')
        img.thumbnail(size)
        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)
        thumbnail = File(thumb_io, name=image.name)
        return thumbnail
