const mynav = document.querySelector("#mynav");

//Write your Navgation here
mynav.innerHTML += "<a href='index.html' title='ABMedia83 Home Page' class='home' ></a>"+
"<div class='thenav'>"+
"<ul>"+
"<li><a href='about.html' title='About ABMedia83'>about</a></li>"+
"<li><a href='portfolio.html' title='Portfolio'>portfolio</a>"+
"<li><a href='video.html' title='Video'>video</a>"+
"<li><a href='resources.html' title='Resources'>resources</a>"+
"<li><a href='contact.html' title='Contact'>contact</a>"+
"</ul>"+
"</div> \n"+
"<div class='mnu'>"+
"<div class='bar'></div>"+
"<div class='bar'></div>"+
"<div class='bar'></div>"+
"</div>";







//Get Menu Button 
let menu = document.querySelector(".mnu"); 
//Get the Navigation Bar 
let nav = document.querySelector(".thenav"); 
//Add Menu Event Listner 
menu.addEventListener("click", function() 
{
    menu.classList.toggle("active");
    nav.classList.toggle("active");

})