document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
      const url = `http://localhost:5000/${e.target.dataset.short}`;
  
      navigator.clipboard
        .writeText(url)
        .then(() => {
          console.log("Text copied to clipboard...");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  });

  document.getElementById("urlForm").addEventListener("submit", (event) => {
    const urlInput = event.target.origin.value.trim();
  
    // Validar formato de URL con regex
    const urlPattern = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/;
  
    if (!urlPattern.test(urlInput)) {
      event.preventDefault(); // Evitar envío del formulario
      alert("Please enter a valid URL (e.g., https://example.com)");
    }
  });
  