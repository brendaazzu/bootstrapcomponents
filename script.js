let text = "Move With Joy";
let i = 0;
let element = document.querySelector(".display-4");

function typeLetterByLetter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeLetterByLetter, 250);
  } else {
    setTimeout(restartAnimation, 1000);
  }
}

function restartAnimation() {
  element.innerHTML = "";
  i = 0;
  typeLetterByLetter();
}

typeLetterByLetter();

let text2 = "Moving © 2023 We can help you with your next move!";
let i2 = 0;
let element2 = document.querySelector(".text-footer");

function typeLetterByLetter2() {
  if (i2 < text2.length) {
    element2.innerHTML += text2.charAt(i2);
    i2++;
    setTimeout(typeLetterByLetter2, 250);
  } else {
    setTimeout(restartAnimation2, 1000);
  }
}

function restartAnimation2() {
  element2.innerHTML = "";
  i2 = 0;
  typeLetterByLetter2();
}

typeLetterByLetter2();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
