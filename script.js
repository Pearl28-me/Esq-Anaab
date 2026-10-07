var em = ['🎉', '✨', '⚖️', '💛', '🎊', '⭐'];

function party() {

for (var i = 0; i < 45; i++) {


var s = document.createElement('span');

s.className = 'c';

s.textContent = em[i % em.length];

s.style.left = Math.random() * 100 + 'vw';

s.style.fontSize =
  (16 + Math.random() * 20) + 'px';

s.style.animationDuration =
  (3 + Math.random() * 4) + 's';

s.style.animationDelay =
  (Math.random() * 1.5) + 's';

document.body.appendChild(s);

setTimeout(
  function (x) {
    x.remove();
  }.bind(null, s),
  9000
);


}
}

// Initial celebration
party();

// Scroll reveal animation
var io = new IntersectionObserver(
function (entries) {

entries.forEach(function (entry) {

  if (entry.isIntersecting) {
    entry.target.classList.add('show');
  }

});


},
{
threshold: 0.15
}
);

// Observe every section
document
.querySelectorAll('.sec')
.forEach(function (section) {
io.observe(section);
});
