// Career Evolution Stage Data Dictionary
const journeyData = {
    1: {
        badge: "Full-Time Software Role",
        title: "Software Engineer at WEIGHT WATCHERS",
        period: "Jun 2021 – Jan 2024",
        desc: "Developed customer-facing web applications using JavaScript, React, Node.js, REST APIs, HTML, CSS, and PostgreSQL. Collaborated with PMs, designers, and QA to enhance checkout flows, account settings, and cancellation workflows while investigating application issues through log analysis and user behavior metrics.",
        bullet1: "Led an accessibility initiative resolving 100+ Shopify accessibility issues.",
        bullet2: "Used Git workflows, Docker, AWS services, and CI/CD development pipelines.",
        bullet3: "Leveraged Google Analytics to evaluate feature adoption and performance."
    },

    2: {
        badge: "Agile Leadership Role",
        title: "Scrum Master at P1Games",
        period: "Jun 2024 – Jun 2026",
        desc: "Partnered with product and engineering teams at an early-stage gaming startup to translate business goals into user stories and development tasks. Facilitated Agile ceremonies (sprint planning, stand-ups, reviews, retrospectives) to align teams and improve delivery health.",
        bullet1: "Tracked milestones, dependencies, and risks in Jira and Confluence.",
        bullet2: "Analyzed team velocity and retrospective metrics to optimize workflows.",
        bullet3: "Created delivery health status reports for cross-functional stakeholders."
    },

    3: {
        badge: "Freelance Analytics Role",
        title: "Digital Marketing Apprentice at Acadium",
        period: "Oct 2024 – Dec 2025",
        desc: "Analyzed performance data using Google Analytics, LinkedIn Analytics, Instagram Insights, and email metrics to optimize marketing initiatives. Coordinated client projects by gathering requirements, tracking deliverables, and creating campaign reports.",
        bullet1: "Monitored email performance metrics including open rates and engagement.",
        bullet2: "Created structured performance reports tracking audience growth trends.",
        bullet3: "Improved operational reporting processes for stakeholder visibility."
    },

    4: {
        badge: "Part-time Mentorship",
        title: "Mentor at SEO (Sponsors for Educational Opportunity)",
        period: "Jan 2025 – Present",
        desc: "Conducting structured discovery mentoring conversations to understand mentee goals and career pathways. Supporting candidates preparing for technical and behavioral interviews by identifying skill gaps and creating structured preparation plans.",
        bullet1: "Breaking down complex engineering & career concepts into clear guidance.",
        bullet2: "Strengthening mentee communication for hiring manager interactions.",
        bullet3: "Empowering underrepresented talent into tech roles."
    },

    5: {
        badge: "Part-time Technical Role",
        title: "Business Technical Trainer at Genesys Works",
        period: "June 2026 – Present",
        desc: "Delivering daily technical training for a cohort of 42 Young Professionals (YPs), teaching MS Excel concepts (SUM, AVERAGE, conditional formatting, sorting, filtering, fill handles) and workplace readiness. Analyzing completion metrics in Schoology to improve student engagement.",
        bullet1: "Tracking student grades and assignment performance via Microsoft tools.",
        bullet2: "Preparing weekly status reports and updates for program leadership.",
        bullet3: "Increased curriculum engagement through survey feedback improvements."
    }
};


// Full Resume Experience Dictionary
const experienceData = {
    1: {
        company: "Genesys Works • New York, NY",
        title: "Business Technical Trainer (Part-time)",
        period: "June 2026 – Present",
        overview: "Nonprofit workforce development organization preparing high school students, known as Young Professionals (YPs), for professional careers.",
        bullets: [
            "Deliver daily technical training sessions for a cohort of 42 Young Professionals, teaching Microsoft Excel fundamentals, professional technology skills, and workplace readiness through structured learning activities.",
            "Train students on Excel concepts including SUM functions, AVERAGE formulas, conditional formatting, sorting, filtering, fill handles, spreadsheet formatting, and foundational data organization techniques.",
            "Track student performance, assignment completion, grades, and engagement metrics using Schoology and Microsoft tools to identify progress trends and areas requiring additional support.",
            "Create and review weekly status reports submitted by YPs, evaluating quality, completeness, communication effectiveness, and alignment with professional workplace expectations.",
            "Prepare performance updates and progress reports for program leadership, participating in weekly discussions to review student development, challenges, and improvement opportunities.",
            "Analyze cohort completion trends and implement feedback-driven improvements that increased assignment participation and curriculum engagement.",
            "Collect student feedback through surveys and apply insights to improve training delivery, learning support, and overall participant experience.",
            "Create documentation and learning resources to help students understand technical concepts and apply workplace best practices."
        ]
    },

    2: {
        company: "Weight Watchers • New York, NY",
        title: "Software Engineer (Full-time)",
        period: "Jun 2021 – Jan 2024",
        overview: "Global digital health and wellness company delivering customer-facing web applications and personalized user experiences.",
        bullets: [
            "Collaborated with product managers, designers, QA engineers, and business stakeholders to develop and enhance customer-facing digital experiences, including checkout flows, account management, cancellation workflows, and user settings.",
            "Developed web applications using JavaScript, React, Node.js, REST APIs, HTML, CSS, and PostgreSQL while supporting scalable and reliable product delivery.",
            "Leveraged Google Analytics and user behavior insights to understand customer interactions, evaluate feature performance, and support data-informed product improvements.",
            "Investigated application issues by analyzing user behavior, technical logs, and system performance while partnering with cross-functional teams to improve reliability.",
            "Led an accessibility improvement initiative across customer-facing Shopify experiences, identifying and resolving 100+ accessibility issues to improve usability and compliance.",
            "Supported feature enhancements including translation capabilities, filtering functionality, account updates, and user experience improvements.",
            "Used engineering best practices including Git workflows, Docker, AWS services, and CI/CD concepts to support development and deployment processes.",
            "Improved technical documentation and internal workflows to increase knowledge sharing and reduce delivery friction."
        ]
    },

    3: {
        company: "P1Games • New York, NY",
        title: "Scrum Master (Freelance)",
        period: "Jun 2024 – Jun 2026",
        overview: "Early-stage gaming startup building interactive digital gaming experiences.",
        bullets: [
            "Partner with product and engineering teams to translate business goals into actionable requirements, user stories, and development tasks.",
            "Facilitate Agile ceremonies including sprint planning, daily stand-ups, sprint reviews, and retrospectives to improve team alignment and delivery.",
            "Track project milestones, dependencies, risks, and sprint progress using Jira and Confluence to improve visibility across teams.",
            "Create project status reports and progress updates to communicate delivery health, blockers, and upcoming priorities.",
            "Analyze sprint performance and team metrics during retrospectives to identify process improvements and increase delivery effectiveness.",
            "Improve documentation practices and workflow processes to support collaboration and operational efficiency."
        ]
    },

    4: {
        company: "SEO (Sponsors for Educational Opportunity) • New York, NY",
        title: "Mentor (Part-time)",
        period: "Jan 2025 – Present",
        overview: "Nonprofit organization providing education, mentorship, and career development programs for students and emerging professionals.",
        bullets: [
            "Conduct structured discovery-style mentoring conversations to understand mentee goals, challenges, and career pathways.",
            "Support mentees preparing for technical and behavioral interviews by identifying gaps and building targeted preparation plans.",
            "Break down complex technical and professional concepts into clear, actionable guidance for early-career professionals.",
            "Strengthen communication and confidence to help mentees effectively engage with recruiters and hiring managers."
        ]
    },

    5: {
        company: "Acadium • New York, NY",
        title: "Digital Marketing Apprentice (Freelance)",
        period: "Oct 2024 – Dec 2025",
        overview: "Digital apprenticeship platform supporting businesses through marketing and technical project execution.",
        bullets: [
            "Analyzed digital performance data using Google Analytics, LinkedIn Analytics, Instagram Insights, and email campaign metrics to identify engagement trends and optimize marketing initiatives.",
            "Created performance reports tracking campaign results, audience engagement, and project progress to support data-driven decisions.",
            "Monitored email performance metrics including open rates and engagement trends to evaluate campaign effectiveness.",
            "Coordinated multiple client-facing projects by gathering requirements, tracking deliverables, and maintaining documentation across teams.",
            "Improved workflows and reporting processes to support consistent execution and stakeholder communication."
        ]
    }
};


// Mobile Navigation Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {

        const isHidden =
            mobileMenu.classList.contains('hidden');

        if (isHidden) {

            mobileMenu.classList.remove('hidden');

            menuIcon.classList.replace(
                'fa-bars',
                'fa-xmark'
            );

        } else {

            mobileMenu.classList.add('hidden');

            menuIcon.classList.replace(
                'fa-xmark',
                'fa-bars'
            );
        }
    });
}


// Close mobile drawer on item selection
document.querySelectorAll('.mobile-nav-item').forEach(item => {

    item.addEventListener('click', () => {

        if (mobileMenu) {

            mobileMenu.classList.add('hidden');

            menuIcon.classList.replace(
                'fa-xmark',
                'fa-bars'
            );
        }
    });
});


// Career Evolution Stage Switcher
const stageBtns =
    document.querySelectorAll('.stage-btn');

const detailBadge =
    document.getElementById('detailBadge');

const detailTitle =
    document.getElementById('detailTitle');

const detailPeriod =
    document.getElementById('detailPeriod');

const detailDesc =
    document.getElementById('detailDesc');

const bullet1 =
    document.getElementById('bullet1');

const bullet2 =
    document.getElementById('bullet2');

const bullet3 =
    document.getElementById('bullet3');


stageBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const stageId =
            btn.getAttribute('data-stage');

        const data =
            journeyData[stageId];


        stageBtns.forEach(b => {

            b.classList.remove(
                'active',
                'border-2',
                'border-goldChampagne'
            );

            b.classList.add(
                'border-borderMuted'
            );
        });


        btn.classList.add(
            'active',
            'border-2',
            'border-goldChampagne'
        );


        if (detailBadge) {
            detailBadge.textContent =
                data.badge;
        }

        if (detailTitle) {
            detailTitle.textContent =
                data.title;
        }

        if (detailPeriod) {
            detailPeriod.textContent =
                data.period;
        }

        if (detailDesc) {
            detailDesc.textContent =
                data.desc;
        }

        if (bullet1) {
            bullet1.textContent =
                data.bullet1;
        }

        if (bullet2) {
            bullet2.textContent =
                data.bullet2;
        }

        if (bullet3) {
            bullet3.textContent =
                data.bullet3;
        }

    });
});


// Experience Modal Handler
function openExperienceModal(id) {

    const data =
        experienceData[id];


    document.getElementById(
        'expModalCompany'
    ).textContent =
        data.company;


    document.getElementById(
        'expModalTitle'
    ).textContent =
        data.title;


    document.getElementById(
        'expModalPeriod'
    ).textContent =
        data.period;


    document.getElementById(
        'expModalOverview'
    ).textContent =
        data.overview;


    const bulletsContainer =
        document.getElementById(
            'expModalBullets'
        );


    bulletsContainer.innerHTML = '';


    data.bullets.forEach(bullet => {

        const li =
            document.createElement('li');

        li.textContent =
            bullet;

        bulletsContainer.appendChild(li);
    });


    document.getElementById(
        'experienceModal'
    ).classList.remove('hidden');
}


// Close Modal
function closeModal(modalId) {

    document.getElementById(
        modalId
    ).classList.add('hidden');
}


// Contact Form Handling
const contactForm =
    document.getElementById('contactForm');

const formToast =
    document.getElementById('formToast');


if (contactForm) {

    contactForm.addEventListener(
        'submit',
        (e) => {

            e.preventDefault();


            if (formToast) {

                formToast.classList.remove(
                    'hidden'
                );
            }


            contactForm.reset();


            setTimeout(() => {

                if (formToast) {

                    formToast.classList.add(
                        'hidden'
                    );
                }

            }, 5000);
        }
    );
}


// Make inline HTML onclick handlers available
window.openExperienceModal =
    openExperienceModal;

window.closeModal =
    closeModal;