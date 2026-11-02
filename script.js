/*
  ABDUL WAHAB REHAN — PORTFOLIO INTERACTIONS

  1) Add your EmailJS values below (see README.md).
  2) The contact form sends directly to your configured EmailJS template.
*/

const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const toTop = document.getElementById("toTop");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  menuBtn?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Reveal sections as they enter the viewport.
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.querySelectorAll(".skill-fill").forEach(bar => {
          bar.style.width = bar.dataset.width || "0%";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // Active navigation link.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));

  // Back-to-top button.
  const handleScroll = () => {
    const visible = window.scrollY > 500;
    toTop.classList.toggle("opacity-0", !visible);
    toTop.classList.toggle("pointer-events-none", !visible);
    toTop.classList.toggle("translate-y-3", !visible);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // EmailJS setup and contact form delivery.
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");
  const sendText = document.getElementById("sendText");

  const emailConfigured = ![
    EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID
  ].some(value => value.startsWith("YOUR_"));

  if (emailConfigured && window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    status.textContent = "Your message will be delivered to my email.";
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();

    if (!emailConfigured || !window.emailjs) {
      status.textContent = "Contact form is not configured yet. Please use the email link, or add your EmailJS keys in script.js.";
      status.className = "text-sm text-amber-300";
      return;
    }

    sendBtn.disabled = true;
    sendText.textContent = "Sending...";
    status.textContent = "Sending your message securely...";
    status.className = "text-sm text-slate-400";

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      status.textContent = "Thanks! Your message has been sent successfully.";
      status.className = "text-sm text-emerald-300";
      form.reset();
    } catch (error) {
      console.error("EmailJS delivery error:", error);
      status.textContent = "Sorry, the message could not be sent. Please email abdulwahabrehan7@gmail.com directly.";
      status.className = "text-sm text-rose-300";
    } finally {
      sendBtn.disabled = false;
      sendText.textContent = "Send message";
    }
  });
});
