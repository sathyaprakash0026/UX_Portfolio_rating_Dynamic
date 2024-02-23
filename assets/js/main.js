
const applicants = [
  {
    applicant: "applicants1",
    applicanttitle: "Applicant 1",
    name: "Gloria Lo",
    imageSrc: "assets/img/gloria-3.gif",
    text: "A seasoned product designer hailing from Sydney, Australia, known for her expertise in crafting seamless user experiences. With a keen eye for detail, she specializes in delivering end-to-end UX/UI designs that captivate audiences. Gloria's innovative approach stems from her deep understanding of user behavior and industry trends.",
    text2: "I'm a product designer based in Sydney, Australia with experience in delivering end-to-end UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.",
    uiux: "85%",
    html: "95%",
    css: "85%",
    js: "65%",
    imagesrc2: "assets/img/gloria-2.png",
    text3:"The viewer should know exactly who you are and what you do within seconds of landing on your UX design portfolio. Craft a compelling headline that provides all the most important information at a glance",
   imagesrc3:"assets/img/gloria-4.png",
    link: "https://www.glorialo.design/",
  },

  {
    applicant: "applicants2",
    applicanttitle: "Applicant 2",
    name: "Moritz Oesterlau",
    imageSrc: "assets/img/moritz.jpg",
    text: "Studied UX design with CareerFoundry and is now part of the Global Goals Curriculum 2030 team,helping to shape a democratic, just, and sustainable society through the power of education.multi-skilled product/UX designer based in Germany. He also dabbles in interface design and frontend development.",
    text2: "I‘m a UX/UI Designer with over six years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact",
    uiux: "78%",
    html: "87%",
    css: "89%",
    js: "60%",
    imagesrc2: "assets/img/moritz1.jpg",
    text3:"Showcase your process, not just the finished product. Write about the methods you used, what you learned along the way, the challenges you came up against, and how you solved certain problems. Each case study should tell a complete, logical story.",
    imagesrc3:"assets/img/moritz2.png",
    link: "https://www.moritzoesterlau.de/",
  },
  {
    applicant: "applicants3",
    applicanttitle: "Applicant 3",
    name: "Elizabeth Lin",
    imageSrc: "assets/img/elizabeth1.jpg",
    text: "San Francisco-based product designer and self-proclaimed fashion, teaching, and classical saxophone enthusiast",
    text2: "I'm passionate about design education and UX Design.I support each case study with meaningful visuals—that is, real artifacts from your project, not just illustrations.",
    uiux: "89%",
    html: "90%",
    css: "89%",
    js: "60%",
    imagesrc2: "assets/img/elizabeth2.jpg",
    text3:"Don’t just tell the story of each project; bring it to life with visual artifacts. For each step you go through in your case study, include a photo or screenshot of how it looked in action.",
    imagesrc3:"assets/img/elizabeth3.png",
    link: "https://www.elizabethylin.com/",
  },
  {
    applicant: "applicants4",
    applicanttitle: "Applicant 4",
    imageSrc: "assets/img/olivia-1.jpg",
    name: "Olivia Truong",
    text: " A product designer based in Boston, Massachusetts. In my own words, I like to go out into the world and capture its beauty and weirdness",
    text2: "Focus on problem-solving also conveys another essential UX trait.Genuinely engaged in the problem and how to solve it for the user. That’s the sign of a passionate UX designer",
    uiux: "88%",
    html: "93%",
    css: "82%",
    js: "68%",
    text3:"Your UX design portfolio should demonstrate your approach to problem-solving. Kick off each case study by framing the problem in detail, using emotive language to convey empathy. Refer back to the problem throughout.",
    imagesrc3:"assets/img/olivia-3.png",
    imagesrc2: "assets/img/olivia-2.jpg",
    link: "https://www.oliviatruong.design/",
  },
  {
    applicant: "applicants5",
    applicanttitle: "Applicant 5",
    imageSrc: "assets/img/priyanka-1.jpg",
    name: "Priyanka Gupta",
    text: " Hi, there! I am a Product Designer and a tech enthusiast based in San Francisco A product designer and tech enthusiast based in San Francisco.",
    text2: "Aside from creating awesome user experiences.With a keen eye for detail, I specializes in delivering end-to-end UX/UI designs that captivate audiences",
    uiux: "88%",
    html: "95%",
    css: "83%",
    js: "75",
    text3:"Unsolicited redesigns are an excellent way to build up your UX portfolio and demonstrate your initiative as a designer. As always, frame the problem, document your process, and tell a good story—and don’t forget to include a disclaimer.",
    imagesrc3:"assets/img/priyanka-3.png",
    imagesrc2: "assets/img/priyanka-2.jpg",
    link: "https://priyanka.io/",
  },

];

// Document fragment to hold the sections
const applicantSection = document.querySelector('.about-section-here');

const fragment = document.createDocumentFragment();

// Loop through each applicant and generate HTML content for each
applicants.forEach((applicant, index) => {
  const section = document.createElement('section');
  section.classList.add('about', 'section');
  section.id = applicant.applicant;
  if (index % 2 != 0) {
    section.classList.add('even');
  }

  // HTML content for the applicant
  section.innerHTML = `
      <h2 class="section-title">${applicant.applicanttitle}</h2>
      <div class="about__container bd-grid">
          <div class="about__img">
              <img src="${applicant.imageSrc}" alt="">
          </div>
          <div>
              <h2 class="about__subtitle">Hi I'm ${applicant.name}</h2>
              <p class="about__text">${applicant.text}</p>
          </div>
      </div>

      <section class="skills section" id="skills">
          <h2 class="section-title">Profile</h2>

          <div class="skills__container bd-grid">
              <div>
                  <h2 class="skills__subtitle">Profesional Skills</h2>
                  <p class="skills__text">${applicant.text2}</p>
                  <div class="skills__data">
                      <div class="skills__names">
                          <i class='bx bxs-paint skills__icon'></i>
                          <span class="skills__name">UX/UI</span>
                      </div>
                      <div class="skills__bar skills__ux"></div>
                      <div><span class="skills__percentage">${applicant.uiux}</span></div>
                  </div>
                  <div class="skills__data">
                      <div class="skills__names">
                          <i class='bx bxl-html5 skills__icon'></i>
                          <span class="skills__name">HTML5</span>
                      </div>
                      <div class="skills__bar skills__html"></div>
                      <div><span class="skills__percentage">${applicant.html}</span></div>
                  </div>
                  <div class="skills__data">
                      <div class="skills__names">
                          <i class='bx bxl-css3 skills__icon'></i>
                          <span class="skills__name">CSS3</span>
                      </div>
                      <div class="skills__bar skills__css"></div>
                      <div><span class="skills__percentage">${applicant.css}</span></div>
                  </div>
                  <div class="skills__data">
                      <div class="skills__names">
                          <i class='bx bxl-javascript skills__icon'></i>
                          <span class="skills__name">JAVASCRIPT</span>
                      </div>
                      <div class="skills__bar skills__js"></div>
                      <div><span class="skills__percentage">${applicant.js}</span></div>
                  </div>
              </div>

              <div>
                  <img src="${applicant.imagesrc2}" alt="" class="skills__img">
                  <br/>
                  <p class="skills__text">${applicant.text3}</p>
                
              </div>

              <div>
              <img src="${applicant.imagesrc3}" alt="" class="skills__img">
              <br/>
 
                  <div class="skills__data">
                      <div class="skills__names">
                          <a href="${applicant.link}" target="_blank" class="nav__link1">View ${applicant.name}'s full portfolio Website</a>
                      </div>
                  </div>
              </div>

              <!-- Section 1 -->
              <section class="front-section dark-bg" data-name="${applicant.name}">
                  <!-- FRONT -->
                  <h1>Rating</h1>  
                  <section class="rating-numbers">
                      <input name="rating" class="radio-btn" value="1" type="radio" id="one" checked></input>
                      <label class="rating-number one default-active" for="one">1</label>
                      <input name="rating" class="radio-btn" value="2" type="radio" id="two"></input>
                      <label class="rating-number two" for="two">2</label>
                      <input name="rating" class="radio-btn" value="3" type="radio" id="three"></input>
                      <label class="rating-number three " for="three">3</label>
                      <input name="rating" class="radio-btn" value="4" type="radio" id="four"></input>
                      <label class="rating-number four" for="four">4</label>
                      <input name="rating" class="radio-btn" value="5" type="radio" id="five"></input>
                      <label class="rating-number five" for="five">5</label>
                  </section>
                  <!-- Textarea for feedback -->
                  <textarea name="" id="" cols="0" rows="6" class="contact__input" placeholder="Tell us more about your experience..."></textarea>
                  <button class="btn">Submit</button>
              </section>

              <!-- Section 1 Result -->
              <section class="back-section dark-bg">
                  <section class="back-section-inner">
                      <img src="assets/img/illustration-thank-you.svg" alt="" aria-hidden="true">
                      <p class="result-text"></p>
                      <section class="thankyou-section">
                          <h1>Response Recorded!</h1>
                      </section>
                  </section>
              </section>

          </div>
      </section>
  `;

  fragment.appendChild(section);
});

applicantSection.appendChild(fragment);


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 80,

});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });



const sectionContainers = document.querySelectorAll(".front-section");
let allResponses = [];


sectionContainers.forEach(section => {
  const ratingNumbers = section.querySelectorAll(".rating-number");
  const defaultActive = section.querySelector(".default-active");
  const submitbtn = section.querySelector(".btn");
  const resultCard = section.nextElementSibling;
  const resultText = resultCard.querySelector(".result-text");

  ratingNumbers.forEach((button) => {
    button.addEventListener("click", function () {
      ratingNumbers.forEach((ifSelected) => {
        ifSelected.classList.remove("was-selected");
      });
      button.classList.add("was-selected");
      defaultActive.classList.remove("default-active");
    });
  });

  submitbtn.addEventListener("click", function () {
    const name = section.dataset.name; // Get the data name attribute
    const wasSelected = section.querySelector(".was-selected");
    const feedback = section.querySelector(".contact__input").value;

    if (wasSelected === null) {
      window.alert("Please select a value ⁉️");
    }
    else {
      const response = {
        name: name,
        rating: wasSelected.textContent,
        feedback: feedback
      };
      allResponses.push(response);
      resultCard.classList.add("show-card");
      section.classList.add("hide-card");
      resultText.textContent = `${wasSelected.textContent} out of 5`;
      // console.log("All Responses:", allResponses);
      generateChart();

    }
  });
});


let myChart;
function generateChart() {
  // console.log(allResponses, "generate");

  if (!allResponses || allResponses.length === 0) {
    // console.log("No records to show");
    document.getElementById('noRecordsMessage').style.display = 'block';
    if (myChart) {
      myChart.destroy();
    }
    return;
  }

  document.getElementById('noRecordsMessage').style.display = 'none';
  const labels = [];
  const values = [];


  allResponses.forEach(response => {
    labels.push(response.name);
    values.push(response.rating);
  });
  if (myChart) {
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = values;
    myChart.update(); // Update the chart
  } else {
    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Rating',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        },
        responsive: true,
        aspectRatio: 1.5
      }
    });
  }
}

