from django.contrib import admin
from django.urls import path, include
from serverApp import urls as server_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('stores/', include(server_urls)),
]