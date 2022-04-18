
console.warn("Hare Krishna ! 🙏")

url = 'https://api.nasa.gov/planetary/apod?api_key=';

api_key = '';

b =document.getElementById("b2"); 

b.addEventListener('click',myFunc)

// function starts
function myFunc(){
  
  // Clear the container area
  const myNode = document.getElementById("base");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  fetch(url+api_key).then(r => r.json()).then(data => {
    // getting data

    base = document.getElementById("base");

    // creating image tag
    const newE = document.createElement("img");
    // inseritng image url which we got from API call
    newE.src = data.url;

    // appending to DOM - Document Object Modelling (which we call Browser view area)
    base.appendChild(newE);

    const newInfo = document.createElement("div");
    const text = document.createTextNode(data.explanation)
    newInfo.appendChild(text);

    base.appendChild(newInfo);

    console.log(newInfo);
  });

}
// function ends


