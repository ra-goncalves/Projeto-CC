document.addEventListener('DOMContentLoaded', function () {
  var timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      this.classList.add('active');
    });

    item.addEventListener('mouseout', function () {
      this.classList.remove('active');
    });
  });
});

const modoNoturnoBtn = document.getElementById('modo-noturno');
const bodyElement = document.body;

function alternarModoNoturno() {
  bodyElement.classList.toggle('modo-noturno');
}

modoNoturnoBtn.addEventListener('click', alternarModoNoturno);

const subirTopoBtn = document.getElementById('subir-topo');

function toggleSubirTopoButton() {
  if (window.scrollY > 100) {
    subirTopoBtn.classList.add('show');
  } else {
    subirTopoBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleSubirTopoButton);

function subirAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

subirTopoBtn.addEventListener('click', subirAoTopo);


