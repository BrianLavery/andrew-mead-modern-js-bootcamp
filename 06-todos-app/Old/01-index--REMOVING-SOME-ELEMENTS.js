paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  if (p.textContent.toLowerCase().includes("the")) {
    p.remove();
  }
})
