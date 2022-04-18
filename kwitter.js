function adduser(){
userid=document.getElementById("username").value ;
localStorage.setItem("userid",userid);

window.location="kwitter_room.html";
}