'use client';

import { useEffect } from "react";

export default function Home() {
useEffect(() => {
  console.log("Advanced CV Loaded.");

// --- Theme Toggle ---
const themeToggleButton = document.getElementById('theme-toggle') as HTMLElement | null;
const body = document.body;
const themeIcon = themeToggleButton?.querySelector('i') as HTMLElement | null;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-mode') {
        themeIcon?.classList.remove('fa-moon');
        themeIcon?.classList.add('fa-sun');
    }
}

themeToggleButton?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeIcon?.classList.remove('fa-moon');
        themeIcon?.classList.add('fa-sun');
    } else {
        localStorage.removeItem('theme');
        themeIcon?.classList.remove('fa-sun');
        themeIcon?.classList.add('fa-moon');
    }
});

// --- Scroll Animations ---
const animatedSections = document.querySelectorAll('.animate-on-scroll');

const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

animatedSections.forEach(section => {
    observer.observe(section);
});

// --- Project Modal ---
const projectModal = document.getElementById('projectModal') as HTMLElement | null;
const projectDetailButtons = document.querySelectorAll('.btn-details');
const closeModalButton = projectModal?.querySelector('.close-button') as HTMLElement | null;

interface ProjectData {
    title: string;
    image: string;
    tech: string;
    description: string;
    link: string;
}

const projectsData: Record<string, ProjectData> = {
    project1: {
        title: "Thori Hub - Task Manager",
        image: "logo.jpg",
        tech: "HTML, CSS, Javascript",
        description: `<p>Thori Hub is a user-friendly website specially designed for ice cream lovers who want to purchase their favorite flavors online...</p>`,
        link: "#"
    },
    project2: {
        title: "Personal Portfolio Website",
        image: "https://via.placeholder.com/600x350/666/fff?text=Portfolio+Detail",
        tech: "HTML5, CSS3, JavaScript, Responsive Design",
        description: `<p>The website you are currently viewing!...`,
        link: "#"
    },
    project3: {
        title: "E-commerce UI Design & Prototype",
        image: "https://via.placeholder.com/600x350/777/fff?text=E-commerce+UI+Detail",
        tech: "Figma, Prototyping, UI/UX Principles",
        description: `<p>Designed a user-friendly and visually appealing interface for a conceptual online electronics store...</p>`,
        link: "#"
    }
};

projectDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectCard = (button as HTMLElement).closest('.project-card') as HTMLElement | null;
        const projectId = projectCard?.dataset.projectId;
        const project = projectId ? projectsData[projectId] : null;

        if (project && projectModal) {
            const img = document.getElementById('modalProjectImage') as HTMLImageElement;
            const title = document.getElementById('modalProjectTitle') as HTMLElement;
            const tech = projectModal.querySelector('.modal-project-tech') as HTMLElement;
            const desc = document.getElementById('modalProjectDescription') as HTMLElement;
            const link = document.getElementById('modalProjectLink') as HTMLAnchorElement;

            img.src = project.image;
            title.textContent = project.title;
            tech.textContent = project.tech;
            desc.innerHTML = project.description;

            if (project.link && project.link !== "#") {
                link.href = project.link;
                link.style.display = 'inline-block';
            } else {
                link.style.display = 'none';
            }

            projectModal.style.display = 'flex';
            setTimeout(() => projectModal.classList.add('open'), 10);
        }
    });
});

closeModalButton?.addEventListener('click', () => {
    if (projectModal) {
        projectModal.classList.remove('open');
        setTimeout(() => projectModal!.style.display = 'none', 300);
    }
});

window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === projectModal) {
        projectModal?.classList.remove('open');
        setTimeout(() => {
            if (projectModal) projectModal.style.display = 'none';
        }, 300);
    }
});

window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && projectModal?.style.display === 'flex') {
        projectModal.classList.remove('open');
        setTimeout(() => {
            if (projectModal) projectModal.style.display = 'none';
        }, 300);
    }
});

// --- Download CV Button (Simulated) ---
const downloadButton = document.getElementById('download-cv') as HTMLElement | null;
downloadButton?.addEventListener('click', () => {
    alert("Printing CV... (Configure your browser's print settings for best results, e.g., 'Save as PDF', remove headers/footers).");
    window.print();
});

// --- Update Current Year in Footer ---
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
}


}, []);

  return (
    <>
      <div className="resume-container">
        <aside className="sidebar">
          <div className="profile-pic-container">
            <img src="anujparajuli.jpg " alt="Anuj Parajuli" className="profile-pic" />
          </div>
          <section className="contact-info">
            <h2>Contact</h2>
            <p><i className="fas fa-map-marker-alt"></i> gaushala, Kathmandu</p>
            <p><i className="fas fa-phone"></i> 974-8382160 <span className="detail">(Mobile)</span></p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:anujparajuli5@gmail.com">anujparajuli5@gmail.com</a></p>
            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/anuj-parajuli" target="_blank" rel="noopener noreferrer">linkedin.com/in/anuj-parajuli</a></p>
          </section>

          <section className="top-skills">
            <h2>Top Skills</h2>
            <ul className="skills-list">
              <li><span className="skill-name">Front-End Development</span><div className="skill-bar"><div className="skill-level" style={{ width: "90%" }}></div></div></li>
              <li><span className="skill-name">React.js</span><div className="skill-bar"><div className="skill-level" style={{ width: "85%" }}></div></div></li>
              <li><span className="skill-name">JavaScript</span><div className="skill-bar"><div className="skill-level" style={{ width: "88%" }}></div></div></li>
              <li><span className="skill-name">CSS & HTML5</span><div className="skill-bar"><div className="skill-level" style={{ width: "92%" }}></div></div></li>
            </ul>
          </section>

          <section className="languages">
            <h2>Languages</h2>
            <ul>
              <li>Nepali <span className="detail">(Native or Bilingual)</span></li>
              <li>English <span className="detail">(Professional Working)</span></li>
              <li>Hindi <span className="detail">(Limited Working)</span></li>
            </ul>
          </section>
          <div className="sidebar-footer">
            <button id="theme-toggle" className="icon-btn" aria-label="Toggle theme"><i className="fas fa-moon"></i></button>
            <button id="download-cv" className="icon-btn" aria-label="Download CV"><i className="fas fa-download"></i></button>
          </div>
        </aside>

        <main className="main-content">
          <header className="main-header animate-on-scroll">
            <h1>Anuj Parajuli</h1>
            <p className="job-title">Web Developer | CSS, JavaScript, React</p>
            <p className="location">Kathmandu, Bāgmatī, Nepal</p>
          </header>

          <section className="summary animate-on-scroll">
            <h2><i className="fas fa-user-circle icon"></i> Summary</h2>
            <p className="quote">&quot;Trying to make &quot;Hello World&quot; the new &quot;abc&quot; ;&quot;</p>
            <p>A passionate and driven Computer Application student at Tribhuvan University with a strong foundation in web development technologies including JavaScript, CSS, and React. Eager to apply theoretical knowledge and practical skills to real-world projects, and contribute to innovative tech solutions. I thrive on learning new technologies and am committed to continuous professional growth.</p>
            <p>Outside of tech, I am an avid tea lover and enjoy exploring new cinematic experiences.</p>
          </section>

          <section className="projects animate-on-scroll">
            <h2><i className="fas fa-project-diagram icon"></i> Projects</h2>
            <div className="projects-grid">
              <div className="project-card" data-project-id="project1">
                <img src="logo.jpg" alt="Thori Hub" className="fit" />
                <div className="project-card-content">
                  <h3>Thori hub</h3>
                  <p className="project-tech">HTML, CSS, Javascript</p>
                  <p className="project-summary">Thori Hub is webside to icecream lover who want to purchers online in quick way. This web is bulid using HTML, CSS, Javascript.</p>
                  <button className="btn-details">Learn More</button>
                </div>
              </div>
            </div>
          </section>

          <section className="education animate-on-scroll">
            <h2><i className="fas fa-graduation-cap icon"></i> Education</h2>
            <div className="education-entry">
              <h3>Tribhuvan University</h3>
              <p>Bachelor&apos;s degree, Computer Programming, Specific Applications</p>
              <p className="date-range"><i className="far fa-calendar-alt"></i> May 2024 - November 2028 (Expected)</p>
            </div>
          </section>

          <footer className="page-footer">
            Anuj Parajuli
          </footer>
        </main>
      </div>

      <div id="projectModal" className="modal">
        <div className="modal-content">
          <span className="close-button">×</span>
          <img id="modalProjectImage" src="logo.jpg" alt="Project Image" className="modal-project-image" />
          <h2 id="modalProjectTitle"></h2>
          <p className="modal-project-tech"></p>
          <div id="modalProjectDescription"></div>
          <a id="modalProjectLink" href="#" target="_blank" rel="noopener noreferrer" className="btn-link">Visit Project (if available)</a>
        </div>
      </div>

    </>
  );
}
