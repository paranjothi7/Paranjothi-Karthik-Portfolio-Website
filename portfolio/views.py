from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from .models import (
    PersonalInfo, Skill, Education, Experience, 
    Project, Certification, SocialLink, ContactMessage
)
from .forms import ContactForm
from django.core.mail import send_mail
from django.http import JsonResponse
from .forms import ContactForm
from .models import ContactMessage

def index(request):
    """Main portfolio view"""
    try:
        personal_info = PersonalInfo.objects.first()
    except:
        personal_info = None
    
    skills = Skill.objects.all()
    education_list = Education.objects.all()
    experiences = Experience.objects.all()
    projects = Project.objects.all()
    certifications = Certification.objects.all()
    social_links = SocialLink.objects.all()
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            ContactMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                message=form.cleaned_data['message']
            )
            messages.success(request, f'Thank you, {form.cleaned_data["name"]}!')
            return redirect('portfolio:index')
    else:
        form = ContactForm()
    
    context = {
        'personal_info': personal_info,
        'skills': skills,
        'education_list': education_list,
        'experiences': experiences,
        'projects': projects,
        'certifications': certifications,
        'social_links': social_links,
        'form': form,
    }
    
    return render(request, 'portfolio/index.html', context)

def about(request):
    personal_info = PersonalInfo.objects.first()
    skills = Skill.objects.all()
    return render(request, 'portfolio/about.html', {
        'personal_info': personal_info,
        'skills': skills,
    })

def projects_view(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/projects.html', {'projects': projects})

def contact_submit(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():

            ContactMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                message=form.cleaned_data['message']
            )

            send_mail(
                subject=f"Portfolio Contact - {form.cleaned_data['name']}",
                message=f"""
Name: {form.cleaned_data['name']}
Email: {form.cleaned_data['email']}

Message:
{form.cleaned_data['message']}
                """,
                from_email='paranjothikarthik2003@gmail.com',
                recipient_list=['paranjothikarthik2003@gmail.com'],
                fail_silently=False,
            )

            return JsonResponse({
                'success': True,
                'message': 'Message sent successfully!'
            })

    return JsonResponse({
        'success': False,
        'message': 'Invalid request'
    })