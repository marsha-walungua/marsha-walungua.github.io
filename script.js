/* =========================================================
   Marsha Walungua — SOC Analyst Portfolio
   Bilingual (FR/EN) + Interactive Elements
   ========================================================= */

const LANG = {
  fr: {
    page_title:      "Marsha Walungua — Portfolio SOC",
    nav_about:       "À propos",
    nav_skills:      "Compétences",
    nav_certs:       "Certifs",
    nav_projects:    "Projets",
    nav_contact:     "Contact",
    hero_sub:        "apprentie analiste SOC",
    hero_cta_work:   "Voir mon travail",
    hero_cta_contact:"Me contacter",
    hero_status:     "Ouvert aux opportunités SOC",
    about_title:     "À propos",
    about_p1:        "Je suis <strong>Marsha Walungua</strong>, apprentie analyste SOC, actuellement en formation <strong>Réseaux, Infrastructure &amp; Sécurité</strong> à l'<strong>ORT Toulouse</strong>.",
    about_p2:        "Issue du développement full-stack, je connais la manière dont les applications sont conçues — et donc les points où elles peuvent être compromises. Cette double compétence me permet d'aborder la sécurité sous un angle à la fois offensif et défensif.",
    about_p3:        "Mon quotidien s'articule autour de l'analyse de captures Wireshark, du suivi de tableaux de bord SIEM et de la pratique de labs CTF.",
    stat_years:      "Ans en IT",
    stat_ctf:        "Défis CTF",
    stat_langs:      "Langues",
    term_role:       "Apprentie JR Analyste SOC @ ORT Toulouse",
    term_studying:   "CCNA &nbsp; Security+ &nbsp; Blue Team",
    skills_title:    "Compétences &amp; outils",
    skill_siem:      "Splunk, Wazuh",
    skill_net_title: "Analyse Réseau",
    skill_net:       "Wireshark, tcpdump, nmap, Zeek",
    skill_def_title: "Défense",
    skill_def:       "Firewalls, IDS/IPS, Snort, Suricata",
    skill_linux:     "NixOS, Kali, bash scripting, hardening",
    skill_script_title: "Scripting",
    skill_script:    "Python, Bash, PowerShell, logs",
    skill_web_title: "Sécurité Web",
    skill_web:       "Burp Suite, OWASP Top 10, recon",
    skill_fullstack_title: "Développement Web",
    skill_fullstack: "React, Python, PHP, JS, SQL, API REST",
    skill_infra:     "Proxmox, Docker, Tailscale, AD",
    homelab_title:   "Lab personnel",
    hl_thinkpad:     "VM Kali Linux + suite pentest",
    hl_proxmox:      "8 Go RAM, lab de conteneurs",
    hl_macbook:      "Machine quotidienne, 8 Go RAM",
    hl_monitor:      "Nœud de supervision 4 Go",
    hl_tailscale:    "Tous les nœuds connectés",
    certs_title:     "Certifications",
    cert_ccna:       "Cisco Certified Network Associate",
    cert_secplus:    "Certification fondamentale en cybersécurité",
    cert_cysa:       "Analyste en cybersécurité",
    cert_splunk:     "Utilisateur avancé Splunk",
    cert_in_progress:"En cours",
    cert_next:       "Prochain objectif",
    projects_title:  "Projets",
    proj_siem_title: "Homelab & SIEM",
    proj_siem_desc:  "Infrastructure lab multi-nœuds : serveur Proxmox et vieux MacBook (Antix OS) sur switch local, ThinkPad NixOS (16 Go) et MacBook Air M2 en Tailscale. Nœud de monitoring NixOS (4 Go) fait le pont entre les deux réseaux.",
    proj_siem_link:  "Voir le lab →",
    proj_ctf_title:  "Défis Root-Me",
    proj_ctf_desc:   "Premiers pas sur Root-Me — challenges Web Server résolus et documentés pour apprendre les bases de la sécurité offensive et défensive. Writeups en français.",
    proj_ctf_link:   "Voir mon profil →",
    proj_pcap_title: "Analyse PCAP",
    proj_pcap_desc:  "Début de l'analyse de trafic réseau avec Wireshark — dissection de protocoles, extraction de fichiers, et apprentissage des patterns de trafic malveillant.",
    proj_detection_title: "Homelab Sécurité",
    proj_detection_desc: "Mise en place d'un environnement de lab personnel avec Proxmox, Kali Linux et Wazuh pour apprendre la détection et la réponse aux incidents.",
    contact_title:   "Contact",
    contact_intro:   "Vous cherchez une apprentie analyste SOC ? Parlons-en.",
    contact_github:  "GitHub",
    contact_linkedin:"LinkedIn",
    contact_email:   "Email",
    footer_title:    "Apprentie Analyste SOC",
    footer_quote:    "2026"
  },

  en: {
    page_title:      "Marsha Walungua — JR SOC Analyst Portfolio",
    nav_about:       "About",
    nav_skills:      "Skills",
    nav_certs:       "Certs",
    nav_projects:    "Projects",
    nav_contact:     "Contact",
    hero_sub:        "SOC analyst apprentice",
    hero_cta_work:   "See my work",
    hero_cta_contact:"Get in touch",
    hero_status:     "Open to SOC opportunities",
    about_title:     "About",
    about_p1:        "I'm <strong>Marsha Walungua</strong>, an apprentice JR SOC analyst currently studying <strong>Réseaux, Infrastructure &amp; Sécurité</strong> at <strong>ORT Toulouse</strong>.",
    about_p2:        "Coming from a full-stack development background, I know how applications are built — and therefore where they can be compromised. This dual skillset allows me to approach security from both an offensive and defensive perspective.",
    about_p3:        "My daily routine revolves around analyzing Wireshark captures, monitoring SIEM dashboards, and practicing CTF labs.",
    stat_years:      "Years in IT",
    stat_ctf:        "CTF Challenges",
    stat_langs:      "Languages",
    term_role:       "JR SOC Analyst Apprentice @ ORT Toulouse",
    term_studying:   "CCNA &nbsp; Security+ &nbsp; Blue Team",
    skills_title:    "Skills &amp; tools",
    skill_siem:      "Splunk, Wazuh",
    skill_net_title: "Network Analysis",
    skill_net:       "Wireshark, tcpdump, nmap, Zeek",
    skill_def_title: "Defense",
    skill_def:       "Firewalls, IDS/IPS, Snort, Suricata",
    skill_linux:     "NixOS, Kali, bash scripting, hardening",
    skill_script_title: "Scripting",
    skill_script:    "Python, Bash, PowerShell, automation",
    skill_web_title: "Web Security",
    skill_web:       "Burp Suite, OWASP Top 10, recon",
    skill_fullstack_title: "Web Fullstack",
    skill_fullstack: "React, Python, PHP, JS, SQL, REST APIs",
    skill_infra:     "Proxmox, Docker, Tailscale, AD",
    homelab_title:   "Homelab",
    hl_thinkpad:     "Kali Linux VM + pentesting suite",
    hl_proxmox:      "8GB RAM, container lab",
    hl_macbook:      "Daily driver, 8GB RAM",
    hl_monitor:      "4GB monitoring node",
    hl_tailscale:    "All nodes connected securely",
    certs_title:     "Certifications",
    cert_ccna:       "Cisco Certified Network Associate",
    cert_secplus:    "Foundational cybersecurity certification",
    cert_cysa:       "Cybersecurity Analyst",
    cert_splunk:     "Splunk power user",
    cert_in_progress:"In progress",
    cert_next:       "Next goal",
    projects_title:  "Projects",
    proj_siem_title: "Homelab & SIEM",
    proj_siem_desc:  "Multi-node lab infrastructure: Proxmox server and old MacBook (Antix OS) on local switch, ThinkPad NixOS (16GB) and MacBook Air M2 on Tailscale. NixOS monitoring node (4GB) bridges both networks.",
    proj_siem_link:  "See the lab →",
    proj_ctf_title:  "Root-Me Challenges",
    proj_ctf_desc:   "First steps on Root-Me — Web Server challenges solved and documented to learn offensive and defensive security basics. Writeups in French.",
    proj_ctf_link:   "See my profile →",
    proj_pcap_title: "PCAP Analysis",
    proj_pcap_desc:  "Starting network traffic analysis with Wireshark — protocol dissection, file extraction, and learning malicious traffic patterns.",
    proj_detection_title: "Security Homelab",
    proj_detection_desc: "Setting up a personal lab environment with Proxmox, Kali Linux and Wazuh to learn detection and incident response.",
    contact_title:   "Contact",
    contact_intro:   "Looking for a JR SOC analyst apprentice? Let's talk.",
    contact_github:  "GitHub",
    contact_linkedin:"LinkedIn",
    contact_email:   "Email",
    footer_title:    "JR SOC Analyst Apprentice",
    footer_quote:    "2026"
  }
};

/* ---------- Apply language ---------- */
let currentLang = localStorage.getItem('marsha-lang') || 'fr';

function applyLang(lang) {
  const t = LANG[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update lang toggle button text
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'fr' ? 'EN' : 'FR';

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Save preference
  localStorage.setItem('marsha-lang', lang);
  currentLang = lang;
}

/* ---------- Toggle language ---------- */
function toggleLang() {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
}

/* =========================================================
   DOM Ready
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language
  applyLang(currentLang);

  // Lang toggle button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
      ? 'rgba(10, 14, 23, 0.95)'
      : 'rgba(10, 14, 23, 0.85)';
  }, { passive: true });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(
    '.skill-card, .cert-card, .project-card, .contact-card, .homelab-item, .about-terminal, .about-stats'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
      observer.observe(el);
    });
  } else {
    revealEls.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  /* ---------- Terminal cursor blink ---------- */
  const cursor = document.querySelector('.cursor-blink');
  if (cursor) {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 530);
  }
});
