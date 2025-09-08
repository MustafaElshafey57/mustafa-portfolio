document.addEventListener('DOMContentLoaded', () => {
  // Navigation active link + shadow
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle'); // زرار الهامبورجر
  const navUl = document.querySelector('nav ul');            // القايمة نفسها

  function setActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });

    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // ✅ Toggle menu on mobile
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });

  // ✅ Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('show');
      menuToggle.classList.remove('open');
    });
  });


document.addEventListener("DOMContentLoaded", function() {

  const detailsContent = {
    excel: "Excel: Advanced formulas, pivot tables, data cleaning, and reporting.",
    sql: "SQL: Writing queries, joins, aggregations, and database management.",
    powerbi: "Power BI: Data modeling, DAX calculations, dashboards, and visualizations.",
    python: "Python: Data analysis with Pandas, NumPy, and visualization with Matplotlib/Seaborn.",
    tableau: "Tableau: Interactive dashboards, charts, and data storytelling."
  };

  const skillDisplay = document.getElementById("skillDisplay");
  const skillImage = document.getElementById("skillImage");
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    card.addEventListener("click", function() {
      const skill = card.classList[1]; // class الثاني هو اسم المهارة

      // استبدال الصورة بالتفاصيل
      skillDisplay.innerHTML = `
        <div class="skill-details">
          <h3>${skill.charAt(0).toUpperCase() + skill.slice(1)}</h3>
          <p>${detailsContent[skill]}</p>
        </div>
      `;
    });
  });

});



const projectsContainer = document.querySelector('.projects-container');
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const backBtn = project.querySelector('.backBtn');

  project.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = project.classList.contains('expanded');

    // إعادة تعيين كل المشاريع
    projects.forEach(p => p.classList.remove('expanded'));
    projectsContainer.classList.remove('hide-others');

    if(!isExpanded){
      project.classList.add('expanded');
      projectsContainer.classList.add('hide-others');
    }
  });

  // زر العودة
  backBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // يمنع فتح الكارت مرة تانية عند الضغط على الزر
    project.classList.remove('expanded');
    projectsContainer.classList.remove('hide-others');
  });
});

// الضغط خارج الكارت لإغلاقه
document.addEventListener('click', () => {
  const expanded = document.querySelector('.project.expanded');
  if(expanded) {
    expanded.classList.remove('expanded');
    projectsContainer.classList.remove('hide-others');
  }
});

});

