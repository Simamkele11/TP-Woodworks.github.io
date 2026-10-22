const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

const quoteForm = document.querySelector("#quote-form");
const formStatus = document.querySelector("#form-status");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get("name").trim();
  const contact = data.get("contact").trim();
  const project = data.get("project");
  const details = data.get("details").trim();

  const message = [
    "Hello TP Woodworks, I'd like to enquire about a project.",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Interested in: ${project}`,
    details ? `Project details: ${details}` : ""
  ].filter(Boolean).join("\\n");

  formStatus.textContent = "Demo only: the form does not send or store enquiries. Once the business approves the site, this form wil be connected to a real email/form service or replaced with their confirmed WhatsApp link.";
  formStatus.setAttribute("title", message);
});
