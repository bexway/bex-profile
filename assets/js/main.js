window.onload = function() {
  addClasses("bio-img", ["size-small", "br-round"]);
  addClasses("content", ["bg-light", "padding-thin"]);
  addClasses("font-general", ["fontsize-general"]);
  addClasses("header", ["bg-accent-dark", "font-light", "padding-thin", "flex", "flex-between", "flex-vcenter"]);
  addClasses("header-icon", ["icon-small"]);
  addClasses("header-subsec", ["display-inline"]);
  addClasses("home-description", ["flex", "flex-center", "flex-wrap"]);
  addClasses("home-page", ["hidden"]);
  addClasses("navbar", ["flex", "flex-around", "bg-accent-medium", "font-light", "fontsize-general"]);
  addClasses("navbar-item", ["inline", "size-full", "font-center", "padding-thin"]);
  addClasses("projects-page", ["hidden"]);
  addClasses("font-title", ["fontsize-title", "font-lineheight-title"]);
  addClasses("font-small", ["fontsize-small", "font-italics"]);
  addClasses("font-subtitle", ["fontsize-subtitle", "font-lineheight-title"]);

};

function addClasses(addTo, classesList){
  var classesToAdd = classesList.join(" ");
  var elements = document.getElementsByClassName(addTo);
  var len = elements !== null ? elements.length : 0;
  for(var i=0; i < len; i++) {
      elements[i].className += " " + classesToAdd;
  }
}


// https://stackoverflow.com/questions/32421616/how-to-remove-class-with-media-queries
// https://www.sitepoint.com/javascript-media-queries/
