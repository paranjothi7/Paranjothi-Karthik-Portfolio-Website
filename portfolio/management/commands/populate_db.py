from django.core.management.base import BaseCommand
from portfolio.models import PersonalInfo, Skill, Education, Internship, Project, SocialLink
from datetime import date

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        # Create Personal Info
        PersonalInfo.objects.get_or_create(
            id=1,
            defaults={
                'name': 'Paranjothi Karthik Manikandan',
                'age': 22,
                'location': 'Tirupur, Tamil Nadu, India',
                'email': 'paranjothikarthik2003@gmail.com',
                'phone': '+919629921185',
            }
        )
        
        # Create Skills
        skills = [
            ('Python', 90),
            ('R', 80),
            ('Data Analysis', 85),
            ('Machine Learning', 75),
        ]
        for name, prof in skills:
            Skill.objects.get_or_create(name=name, defaults={'proficiency': prof})
        
        self.stdout.write(self.style.SUCCESS('Database populated!'))