let element = document.getElementById("jsButton");
let clickBtn = document.querySelector(".button");
let meat01 = document.getElementById("meat1");
let meat02 = document.getElementById("meat2");
let meat03 = document.getElementById("meat3");
let meat04 = document.getElementById("meat4");
let meat05 = document.getElementById("meat5");
let meat06 = document.getElementById("meat6");
let meat07 = document.getElementById("meat7");
let meat08 = document.getElementById("meat8");
let meat09 = document.getElementById("meat9");
let meat10 = document.getElementById("meat10");
let meat11 = document.getElementById("meat11");
let meat12 = document.getElementById("meat12");
let meat13 = document.getElementById("meat13");
let meat14 = document.getElementById("meat14");
let meat15 = document.getElementById("meat15");

element.style.animation = "vibrate 2s infinite";

element.onmouseover = on;

function on() {
  clickBtn.style.animation = "shake 0.1s infinite alternate ease-in-out";
  clickBtn.style.transform = "translate(-50%, -50%)";
  clickBtn.style.position = "absolute";
  clickBtn.style.top = "50%";
  clickBtn.style.left = "50%";
  clickBtn.style.cursor = "pointer";
  meat01.style.animation = "fall 6s 15s linear infinite";
  meat02.style.animation = "fall 5s 8s linear infinite";
  meat03.style.animation = "fall 6s 11s linear infinite";
  meat04.style.animation = "fall 5s 4s linear infinite";
  meat05.style.animation = "fall 6s 13s linear infinite";
  meat06.style.animation = "fall 5s 3s linear infinite";
  meat07.style.animation = "fall 6s 9s linear infinite";
  meat08.style.animation = "fall 5s 14s linear infinite";
  meat09.style.animation = "fall 6s 6s linear infinite";
  meat10.style.animation = "fall 5s 1s linear infinite";
  meat11.style.animation = "fall 6s 10s linear infinite";
  meat12.style.animation = "fall 5s 5s linear infinite";
  meat13.style.animation = "fall 6s 7s linear infinite";
  meat14.style.animation = "fall 5s 12s linear infinite";
  meat15.style.animation = "fall 6s 2s linear infinite";

  meat01.style.opacity = "1";
  meat02.style.opacity = "1";
  meat03.style.opacity = "1";
  meat04.style.opacity = "1";
  meat05.style.opacity = "1";
  meat06.style.opacity = "1";
  meat07.style.opacity = "1";
  meat08.style.opacity = "1";
  meat09.style.opacity = "1";
  meat10.style.opacity = "1";
  meat11.style.opacity = "1";
  meat12.style.opacity = "1";
  meat13.style.opacity = "1";
  meat14.style.opacity = "1";
  meat15.style.opacity = "1";
}

element.onmouseout = off;
function off() {
  clickBtn.style.animation = "";
  element.style.animation = "vibrate .5s infinite";

  setTimeout(off1, 1000);
  function off1() {
    meat01.style.opacity = ".9";
    meat02.style.opacity = ".9";
    meat03.style.opacity = ".9";
    meat04.style.opacity = ".9";
    meat05.style.opacity = ".9";
    meat06.style.opacity = ".9";
    meat07.style.opacity = ".9";
    meat08.style.opacity = ".9";
    meat09.style.opacity = ".9";
    meat10.style.opacity = ".9";
    meat11.style.opacity = ".9";
    meat12.style.opacity = ".9";
    meat13.style.opacity = ".9";
    meat14.style.opacity = ".9";
    meat15.style.opacity = ".9";
  }
  setTimeout(off11, 1500);
  function off11() {
    meat01.style.opacity = ".8";
    meat02.style.opacity = ".8";
    meat03.style.opacity = ".8";
    meat04.style.opacity = ".8";
    meat05.style.opacity = ".8";
    meat06.style.opacity = ".8";
    meat07.style.opacity = ".8";
    meat08.style.opacity = ".8";
    meat09.style.opacity = ".8";
    meat10.style.opacity = ".8";
    meat11.style.opacity = ".8";
    meat12.style.opacity = ".8";
    meat13.style.opacity = ".8";
    meat14.style.opacity = ".8";
    meat15.style.opacity = ".8";
  }
  setTimeout(off111, 2000);
  function off111() {
    meat01.style.opacity = ".7";
    meat02.style.opacity = ".7";
    meat03.style.opacity = ".7";
    meat04.style.opacity = ".7";
    meat05.style.opacity = ".7";
    meat06.style.opacity = ".7";
    meat07.style.opacity = ".7";
    meat08.style.opacity = ".7";
    meat09.style.opacity = ".7";
    meat10.style.opacity = ".7";
    meat11.style.opacity = ".7";
    meat12.style.opacity = ".7";
    meat13.style.opacity = ".7";
    meat14.style.opacity = ".7";
    meat15.style.opacity = ".7";
  }
  setTimeout(off1111, 2500);
  function off1111() {
    meat01.style.opacity = ".6";
    meat02.style.opacity = ".6";
    meat03.style.opacity = ".6";
    meat04.style.opacity = ".6";
    meat05.style.opacity = ".6";
    meat06.style.opacity = ".6";
    meat07.style.opacity = ".6";
    meat08.style.opacity = ".6";
    meat09.style.opacity = ".6";
    meat10.style.opacity = ".6";
    meat11.style.opacity = ".6";
    meat12.style.opacity = ".6";
    meat13.style.opacity = ".6";
    meat14.style.opacity = ".6";
    meat15.style.opacity = ".6";
  }
  setTimeout(off11111, 3000);
  function off11111() {
    meat01.style.opacity = ".5";
    meat02.style.opacity = ".5";
    meat03.style.opacity = ".5";
    meat04.style.opacity = ".5";
    meat05.style.opacity = ".5";
    meat06.style.opacity = ".5";
    meat07.style.opacity = ".5";
    meat08.style.opacity = ".5";
    meat09.style.opacity = ".5";
    meat10.style.opacity = ".5";
    meat11.style.opacity = ".5";
    meat12.style.opacity = ".5";
    meat13.style.opacity = ".5";
    meat14.style.opacity = ".5";
    meat15.style.opacity = ".5";
  }
  setTimeout(off111111, 3500);
  function off111111() {
    meat01.style.opacity = ".4";
    meat02.style.opacity = ".4";
    meat03.style.opacity = ".4";
    meat04.style.opacity = ".4";
    meat05.style.opacity = ".4";
    meat06.style.opacity = ".4";
    meat07.style.opacity = ".4";
    meat08.style.opacity = ".4";
    meat09.style.opacity = ".4";
    meat10.style.opacity = ".4";
    meat11.style.opacity = ".4";
    meat12.style.opacity = ".4";
    meat13.style.opacity = ".4";
    meat14.style.opacity = ".4";
    meat15.style.opacity = ".4";
  }
  setTimeout(off1111111, 4000);
  function off1111111() {
    meat01.style.opacity = ".3";
    meat02.style.opacity = ".3";
    meat03.style.opacity = ".3";
    meat04.style.opacity = ".3";
    meat05.style.opacity = ".3";
    meat06.style.opacity = ".3";
    meat07.style.opacity = ".3";
    meat08.style.opacity = ".3";
    meat09.style.opacity = ".3";
    meat10.style.opacity = ".3";
    meat11.style.opacity = ".3";
    meat12.style.opacity = ".3";
    meat13.style.opacity = ".3";
    meat14.style.opacity = ".3";
    meat15.style.opacity = ".3";
  }
  setTimeout(off11111111, 4500);
  function off11111111() {
    meat01.style.opacity = ".2";
    meat02.style.opacity = ".2";
    meat03.style.opacity = ".2";
    meat04.style.opacity = ".2";
    meat05.style.opacity = ".2";
    meat06.style.opacity = ".2";
    meat07.style.opacity = ".2";
    meat08.style.opacity = ".2";
    meat09.style.opacity = ".2";
    meat10.style.opacity = ".2";
    meat11.style.opacity = ".2";
    meat12.style.opacity = ".2";
    meat13.style.opacity = ".2";
    meat14.style.opacity = ".2";
    meat15.style.opacity = ".2";
  }
  setTimeout(off111111111, 5000);
  function off111111111() {
    meat01.style.opacity = ".1";
    meat02.style.opacity = ".1";
    meat03.style.opacity = ".1";
    meat04.style.opacity = ".1";
    meat05.style.opacity = ".1";
    meat06.style.opacity = ".1";
    meat07.style.opacity = ".1";
    meat08.style.opacity = ".1";
    meat09.style.opacity = ".1";
    meat10.style.opacity = ".1";
    meat11.style.opacity = ".1";
    meat12.style.opacity = ".1";
    meat13.style.opacity = ".1";
    meat14.style.opacity = ".1";
    meat15.style.opacity = ".1";
  }
  setTimeout(off1111111111, 5500);
  function off1111111111() {
    meat01.style.opacity = "0";
    meat02.style.opacity = "0";
    meat03.style.opacity = "0";
    meat04.style.opacity = "0";
    meat05.style.opacity = "0";
    meat06.style.opacity = "0";
    meat07.style.opacity = "0";
    meat08.style.opacity = "0";
    meat09.style.opacity = "0";
    meat10.style.opacity = "0";
    meat11.style.opacity = "0";
    meat12.style.opacity = "0";
    meat13.style.opacity = "0";
    meat14.style.opacity = "0";
    meat15.style.opacity = "0";
  }

  setTimeout(off2, 6000);
  function off2() {
    meat01.style.animationName = "dissolve1";
    meat02.style.animationName = "dissolve1";
    meat03.style.animationName = "dissolve1";
    meat04.style.animationName = "dissolve1";
    meat05.style.animationName = "dissolve1";
    meat06.style.animationName = "dissolve1";
    meat07.style.animationName = "dissolve1";
    meat08.style.animationName = "dissolve1";
    meat09.style.animationName = "dissolve1";
    meat10.style.animationName = "dissolve1";
    meat11.style.animationName = "dissolve1";
    meat12.style.animationName = "dissolve1";
    meat13.style.animationName = "dissolve1";
    meat14.style.animationName = "dissolve1";
    meat15.style.animationName = "dissolve1";
  }
}
element.style.animation = "vibrate 2s infinite";
