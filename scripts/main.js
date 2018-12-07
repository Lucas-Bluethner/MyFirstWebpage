var myImage = document.querySelector('img');

var myHTML = document.querySelector('html');

var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/firefox2.png');
        myHTML.style.backgroundColor = "#ff7700"
        myHeading.style.color = "#ff7700"
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
        myHTML.style.backgroundColor = "#9900ff"
        myHeading.style.color = "#9900ff"
    }
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
