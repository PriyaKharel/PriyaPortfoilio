// renderscripts.js
// https://www.w3schools.com/js/js_api_fetch.asp

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("navbar-container");
  
    if (container) {
      fetch("../HTML/navbar.html")
        .then(res => res.text())
        .then(html => {
          container.innerHTML = html;
  
          // ✅ Now dynamically load navbarscripts.js
          const script = document.createElement("script");
          script.src = "../JS/navbarscripts.js";
          document.body.appendChild(script);
        })
        .catch(err => console.error("Failed to load navbar:", err));
    }
  });
  