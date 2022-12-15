let json;
fetch('data_base.json') // fetch returns a promise
   .then(response => response.json())
   .then(data => json = data);

// sessionStorage.setItem("logined", false);


function login() {
   // let a = window.location.pathname;
   // if (a == "/lesson_28/src/login.html"){
   for (let x in json){
   if (document.getElementById("uName").value == json[x].username &&
      document.getElementById("password").value == json[x].password) {
      if(sessionStorage.getItem("logined") != "true"){
         sessionStorage.setItem("logined", true);
         sessionStorage.setItem("userName", document.getElementById("uName").value);
      } else {
         sessionStorage.setItem("logined2", true);
         sessionStorage.setItem("userName2", document.getElementById("uName").value);
      }  
         window.location.href = "index.html";
      }
      }

   }
   
   
   //    if (sessionStorage.getItem("logined") != "true"){
   //    alert ("username or password wrong");
   //    document.getElementById("uName").value = "";
   //    document.getElementById("password").value = "";
   // }



if (sessionStorage.getItem("logined") == "true") {
   document.getElementById("span1").textContent = `welcom ${sessionStorage.getItem("userName")}!`;
   document.getElementById("link").textContent = "logout";
   document.getElementById("div2").style.display = "block";
}
if (sessionStorage.getItem("logined2") == "true") {
   document.getElementById("span2").textContent = `welcom ${sessionStorage.getItem("userName2")}!`;
   document.getElementById("link2").textContent = "logout";
}



let toLink = () => {
   if (document.getElementById("link").textContent == "login")
      window.location.href = "login.html";
   if (document.getElementById("link").textContent == "logout") {
      sessionStorage.setItem("logined", false);
      window.location.href = "index.html";
   }}

let toLink2 = () => {
   if (document.getElementById("link2").textContent == "login more")
   window.location.href = "login.html";
   else {
   sessionStorage.setItem("logined2", false);
   window.location.href = "index.html";
   }}

let toLink3 = () => {
      if (document.getElementById("link2").textContent == "login more user")
      window.location.href = "login.html";
      if (document.getElementById("link").textContent == "logout") {
      sessionStorage.setItem("logined2", false);
      window.location.href = "index.html";
      }}





