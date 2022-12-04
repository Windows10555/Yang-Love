var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
var vara = new Vara(
  "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
  [
    {
      text:
        "YZY",
      y: 600,
      id: "no_erase",
      duration: 4000
    },
  ],
  {
    strokeWidth: 2,
    color: "#1111ff",
    fontSize: fontSize,
    textAlign: "center"
  }
);
vara.ready(function() {
  var erase = true;
  vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
  vara.get("github").container.style.cursor = "pointer";
  vara.get("github").container.onclick = function() {
    document.querySelector("#link").click();
  };
});