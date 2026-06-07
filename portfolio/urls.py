from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('projects/', views.projects_view, name='projects'),
    path(
        'contact-submit/',
        views.contact_submit,
        name='contact_submit'
    ),
]