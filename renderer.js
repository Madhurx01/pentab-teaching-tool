let slides = [];
let current = 0;

async function loadSubject(subject) {
  const res = await fetch(`data/${subject}.json`);
  const data = await res.json();

  slides = data.slides;
  current = 0;

  render();
}

function render() {
  document.getElementById("title").innerText = slides[current].title;
  document.getElementById("content").innerText = slides[current].content;
}

function next() {
  if (current < slides.length - 1) {
    current++;
    render();
  }
}

function prev() {
  if (current > 0) {
    current--;
    render();
  }
}

function addSlide() {
  const title = prompt("Slide Title:");
  const content = prompt("Slide Content:");

  slides.push({ title, content });
  current = slides.length - 1;
  render();
}

loadSubject("toc");