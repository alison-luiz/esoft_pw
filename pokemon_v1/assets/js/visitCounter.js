let visitCounter = localStorage.getItem("visitCounter");

if (!visitCounter) {
  visitCounter = {
    count: 1,
    lastVisit: new Date(),
  };

  localStorage.setItem("visitCounter", JSON.stringify(visitCounter));
} else {
  visitCounter = JSON.parse(visitCounter);

  visitCounter = {
    count: visitCounter.count + 1,
    lastVisit: new Date(),
  };

  localStorage.setItem("visitCounter", JSON.stringify(visitCounter));
}

const footer = document.querySelector("footer");
const p = document.createElement("p");

const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatter = new Intl.DateTimeFormat("pt-BR", options);

p.textContent = `Esta página foi visitada ${
  visitCounter.count
} veze(s). A última visita foi: ${formatter.format(visitCounter.lastVisit)}`;

footer.appendChild(p);
