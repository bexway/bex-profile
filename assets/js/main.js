window.onload = function() {
  addClasses("navbar", ["flex", "flex-around", "bg-accent-medium", "font-light"]);
  addClasses("navbar-item", ["inline"]);
  addClasses("content", ["bg-light"]);
  addClasses("bio-img", ["size-small", "br-round"]);
  addClasses("home-header", ["display-inline-block"]);
  addClasses("home-description", ["flex", "flex-left"]);
  addClasses("resume-page", ["hidden"]);
  addClasses("projects-page", ["hidden"]);

};

function addClasses(addTo, classesList){
  var classesToAdd = classesList.join(" ");
  var elements = document.getElementsByClassName(addTo);
  var len = elements !== null ? elements.length : 0;
  for(var i=0; i < len; i++) {
      elements[i].className += " " + classesToAdd;
  }
}
