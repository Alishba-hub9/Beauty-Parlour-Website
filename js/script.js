AOS.init();

// ✅ Active navbar link highlight on scroll
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const setActiveLink = () => {
  const scrollY = window.scrollY;
  let current = "home";

  sections.forEach((sec) => {
    if (scrollY >= sec.offsetTop - 120) current = sec.id;
  });

  links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// form validation
const form = document.querySelector("#contact-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, message } = Object.fromEntries(new FormData(form));

  if (!name || !email || !message) {
    return showToast("Please fill out all fields.", "#e74c3c");
  }

  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  if (!isValidEmail) {
    return showToast("Please enter a valid email address.", "#e74c3c");
  }

  console.log("Form Submission:", { name, email, message });
  showToast("Thank you! Your message has been sent.", "#27ae60");
  form.reset();
});

const showToast = (text, bg) =>
  Toastify({
    text,
    duration: 4000,
    gravity: "top",
    position: "right",
    backgroundColor: bg,
    stopOnFocus: true,
  }).showToast();
