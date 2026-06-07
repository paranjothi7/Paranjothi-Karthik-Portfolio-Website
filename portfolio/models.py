from django.db import models
from django.core.validators import RegexValidator

class PersonalInfo(models.Model):
    name = models.CharField(max_length=100, default="Paranjothi Karthik Manikandan")
    age = models.IntegerField(default=22)
    location = models.CharField(max_length=200, default="Tirupur, Tamil Nadu, India")
    email = models.EmailField(default="paranjothikarthik2003@gmail.com")
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$')
    phone = models.CharField(validators=[phone_regex], max_length=17, default="+919629921185")
    availability = models.CharField(max_length=50, default="Fulltime")
    experience = models.CharField(max_length=50, default="Fresher")
    profile_photo = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    address = models.TextField(default="No.25, Renuga Nagar, Ponkovil Nagar")
    
    class Meta:
        verbose_name = "Personal Information"
        verbose_name_plural = "Personal Information"
    
    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(help_text="0-100")
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.name} - {self.proficiency}%"

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    score = models.CharField(max_length=50)
    start_year = models.IntegerField()
    end_year = models.IntegerField()
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.degree} - {self.institution}"
    
    @property
    def duration(self):
        return f"{self.start_year}-{self.end_year}"

class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    description = models.TextField()

    def __str__(self):
        return f"{self.title} at {self.company}"

    @property
    def duration(self):
        if self.end_date:
            return f"{self.start_date.strftime('%b %Y')} - {self.end_date.strftime('%b %Y')}"
        return f"{self.start_date.strftime('%b %Y')} - Present"
    
    class Meta:
        ordering = ['title']
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    icon = models.ImageField(
        upload_to='project_icons/',
        blank=True,
        null=True
    )

    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)
    image = models.ImageField(upload_to='certifications/')
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.title} - {self.issuer}"

class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ('email', 'Email'),
        ('github', 'GitHub'),
        ('linkedin', 'LinkedIn'),
        ('leetcode', 'LeetCode'),
        ('facebook', 'Facebook'),
    ]

    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    url = models.URLField()

    icon = models.ImageField(
        upload_to='social_icons/',
        blank=True,
        null=True
    )

    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.platform}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Message from {self.name}"