function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }

function setImage(element){
    num = getRandomInt(10)
    element.style.backgroundImage = 'url("./assets/img' + num + '.png")';
}


window.onload = function get_body() {
    body = document.getElementsByTagName('body')[0];
    setImage(body)
}