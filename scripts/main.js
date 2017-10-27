var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kimjongdae2.jpg') {
      myImage.setAttribute ('src','images/kimjongdae.jpg');
    } else {
      myImage.setAttribute ('src','images/kimjongdae2.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This is CHEN, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is CHEN, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
