

let white = true;
function darkMode(){
  const button = document.querySelector('.js-button')
  if (white)
    {
      document.body.style.backgroundColor = "black";
      white = false;
      button.innerText = 'White Mode'
      document.body.style.color = "white";
    }
    else
   {document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    button.innerText = "Dark Mode";
  white = true; 
  }
}
