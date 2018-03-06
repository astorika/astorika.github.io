var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mike-adams.jpg') {
      myImage.setAttribute ('src','images/tiger-two.jpg');
    } else {
      myImage.setAttribute ('src','images/mike-adams.jpg');
    }
}