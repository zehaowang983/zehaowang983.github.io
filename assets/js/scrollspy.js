/* Highlights the masthead link for the section currently in view. */
(function () {
  var links = [].slice.call(
    document.querySelectorAll('.masthead__menu-item a[href*="#"], .masthead__menu-home-item a[href*="#"]')
  );
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (link) {
    var id = link.getAttribute('href').split('#')[1];
    if (id) byId[id] = link;
  });

  var anchors = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (!anchors.length) return;

  var visible = {};

  function render() {
    var current = null;
    anchors.forEach(function (anchor) {
      if (visible[anchor.id]) current = current || anchor.id;
    });
    if (!current) {
      // nothing intersecting: fall back to the last anchor scrolled past
      anchors.forEach(function (anchor) {
        if (anchor.getBoundingClientRect().top <= 100) current = anchor.id;
      });
    }
    links.forEach(function (link) { link.classList.remove('is-active'); });
    if (current && byId[current]) byId[current].classList.add('is-active');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visible[entry.target.id] = entry.isIntersecting;
    });
    render();
  }, { rootMargin: '-72px 0px -70% 0px', threshold: 0 });

  anchors.forEach(function (anchor) { observer.observe(anchor); });
  render();
})();
