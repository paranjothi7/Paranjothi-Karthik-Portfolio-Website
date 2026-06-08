# Paranjothi Karthik Portfolio Website

## Overview

This is a personal portfolio website developed using the Django Framework. The website serves as a professional platform to showcase my education, technical skills, projects, certifications, experience, and contact information. It provides visitors with an interactive way to learn about my background and connect with me.

**Live Website:** https://paranjothikarthik10.pythonanywhere.com/

---

## Features

* Responsive and modern user interface
* Personal profile and career objective
* Education timeline
* Technical skills showcase
* Project portfolio section
* Certifications gallery
* Experience section
* Contact form with database storage
* Django Admin Panel for content management
* Resume download functionality
* Mobile-friendly design

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome

### Backend

* Python
* Django Framework

### Database

* SQLite3

### Deployment

* PythonAnywhere

---

## Project Structure

```text
Paranjothi-Karthik-Portfolio-Website/
│
├── Karthik_Portfolio/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── portfolio/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── admin.py
│   ├── urls.py
│   ├── templates/
│   └── static/
│
├── media/
├── db.sqlite3
├── manage.py
└── README.md
```

---

## Modules

### Personal Information

Displays:

* Name
* Email
* Phone Number
* Location
* Resume
* Profile Photo

### Education

Shows academic qualifications with:

* Institution Name
* Degree
* Duration
* Academic Performance

### Skills

Displays technical skills with proficiency indicators.

### Projects

Highlights academic and personal projects with descriptions and technologies used.

### Certifications

Displays certifications earned through various learning platforms and programs.

### Experience

Provides professional internship and project experience details.

### Contact Form

Allows visitors to:

* Submit messages
* Store messages in the database
* Contact the portfolio owner directly

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Paranjothi-Karthik-Portfolio-Website.git
```

### Navigate to Project

```bash
cd Paranjothi-Karthik-Portfolio-Website
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Migrations

```bash
python manage.py migrate
```

### Start Development Server

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

---

## Admin Access

Create a superuser:

```bash
python manage.py createsuperuser
```

Access the admin panel:

```text
http://127.0.0.1:8000/admin/
```

---

## Future Enhancements

* Blog Section
* Dark/Light Theme Toggle
* Visitor Analytics Dashboard
* Project Filtering System
* AI-powered Chat Assistant
* Automated Email Responses
* Resume Builder Integration

---

## Author

### Paranjothi Karthik M

Master's in Computer Science and Engineering 

Aspiring Data Scientist | Python Developer | Machine Learning Enthusiast

Email: [paranjothikarthik2003@gmail.com](mailto:paranjothikarthik2003@gmail.com)

Portfolio: https://paranjothikarthik10.pythonanywhere.com/

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## License

This project is developed for educational, professional, and portfolio purposes. Feel free to explore and learn from the implementation.
