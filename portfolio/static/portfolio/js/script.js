/* =============================================
   KARTHIK PORTFOLIO — script.js
   ============================================= */

(function () {
  'use strict';

  /* ─── 1. MOBILE MENU ─────────────────────── */
  const menuIcon = document.querySelector('.menu_icon');
  const navbar   = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });

    // Close when a link is clicked
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navbar.classList.remove('open'));
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('open');
      }
    });
  }

  /* ─── 2. ACTIVE NAV LINK ON SCROLL ───────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navbar a');

  function setActiveLink() {
    let current = '';
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ─── 3. STICKY HEADER SHADOW ────────────── */
  const header = document.querySelector('.header-area');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,.5)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ─── 4. SKILL BARS ──────────────────────── */
  function buildSkillBars() {
    document.querySelectorAll('.skill').forEach(el => {
      const progress = el.style.getPropertyValue('--progress') || '0%';

      // Build track + fill DOM
      const track = document.createElement('div');
      track.className = 'skill-bar-track';
      const fill = document.createElement('div');
      fill.className = 'skill-bar-fill';
      track.appendChild(fill);
      el.appendChild(track);

      // Update the ::after pseudo-element text via custom prop
      el.style.setProperty('--progress', progress);

      // Animate on first intersection
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Small delay for staggered feel
            setTimeout(() => {
              fill.style.width = progress;
            }, 150);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.3 });

      obs.observe(el);
    });
  }

  buildSkillBars();

  /* ─── 5. SCROLL REVEAL ───────────────────── */
  const revealTargets = [
    '.about', '.skills-container', '.row',
    '.projects', '.certifications-container',
    '.contact-container', '.timeline-item',
    '.project', '.certification-card', '.skill'
  ];

  function addRevealClass() {
    revealTargets.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
      });
    });
  }

  function observeReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  addRevealClass();
  observeReveal();

  /* ─── 6. SCROLL-TO-TOP BUTTON ────────────── */
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.innerHTML = '<i class="fa fa-chevron-up"></i>';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─── 7. SMOOTH ANCHOR SCROLLING ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 75; // header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── 8. ABOUT SKILLS — label injection ─── */
  // Inject data-label="Key:" so CSS can style it
  const labelMap = {
    'name':         'Name',
    'age':          'Age',
    'from':         'From',
    'email':        'Email',
    'availability': 'Available'
  };

  document.querySelectorAll('.about-skills ul li').forEach(li => {
    const text = li.textContent.trim();
    const key  = Object.keys(labelMap).find(k =>
      text.toLowerCase().startsWith(k)
    );
    if (key) {
      li.setAttribute('data-label', labelMap[key] + ':');
    }
  });

  /* ─── 9. CERTIFICATION CARD — lightbox hint ─ */
  document.querySelectorAll('.certification-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (!img) return;
      // Simple full-screen preview overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,.92);
        display:flex;align-items:center;justify-content:center;
        z-index:9999;cursor:zoom-out;padding:2rem;
      `;
      const preview = document.createElement('img');
      preview.src = img.src;
      preview.style.cssText = `
        max-width:90vw;max-height:85vh;
        border-radius:6px;object-fit:contain;
        box-shadow:0 20px 60px rgba(0,0,0,.8);
      `;
      overlay.appendChild(preview);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      overlay.addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = '';
      });
      document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') {
          overlay.remove();
          document.body.style.overflow = '';
          document.removeEventListener('keydown', esc);
        }
      });
    });
  });

  const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", async function(e){

        e.preventDefault();

        const formData = new FormData(this);

        try{

            const response = await fetch("/contact-submit/", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            const messageBox =
                document.getElementById("contactResponse");

            if(data.success){

                messageBox.innerHTML =
                    `<span class="success-message">
                        Message sent successfully!
                    </span>`;

                contactForm.reset();

            }else{

                messageBox.innerHTML =
                    `<span class="error-message">
                        Failed to send message.
                    </span>`;
            }

        }catch(error){

            document.getElementById("contactResponse").innerHTML =
                `<span class="error-message">
                    Something went wrong.
                </span>`;
        }

    });
}
/* Footer Scroll To Top */

const scrollTopBtn = document.getElementById("scroll-top");

if(scrollTopBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            scrollTopBtn.classList.add("visible");
        }else{
            scrollTopBtn.classList.remove("visible");
        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

})();