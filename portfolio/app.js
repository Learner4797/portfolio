function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function shooow(){
  document.getElementById("no").style.display='inline';
}
function hidee(){
  document.getElementById("password").style.display='none';
}
function myFunction(){
  var a= document.getElementById("password").value;
  if(a==73653){
      document.getElementById("contact").style.display='none';
      shooow();
      hidee();
  } else{
      alert("Enter correct password");
  }
}
function show(){
  document.getElementById("number1").style.display='inline';
}
function hide(){
  document.getElementById("password1").style.display='none';
}
function myFunctions(){
  var b= document.getElementById("password1").value;
  if(b==73653){
      document.getElementById("contact1").style.display='none';
      show();
      hide();
  } else{
      alert("Enter correct password");
  }
}

