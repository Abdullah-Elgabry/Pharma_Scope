function chatOpen() {
  document.getElementById("chat-open").style.display = "none";
  document.getElementById("chat-close").style.display = "block";
  document.getElementById("chat-window1").style.display = "block";

}
function chatClose() {
  document.getElementById("chat-open").style.display = "block";
  document.getElementById("chat-close").style.display = "none";
  document.getElementById("chat-window1").style.display = "none";
  document.getElementById("chat-window2").style.display = "none";
}
function openConversation() {
  document.getElementById("chat-window2").style.display = "block";
  document.getElementById("chat-window1").style.display = "none";

}
  

function rs() {
    let usertxt = document.getElementById("user_input").value;
    document.getElementById(
      "messageBox"
    ).innerHTML += `<div class="first-chat">
        <p>${usertxt}</p>
        <div class="arrow"></div>
      </div>`

    var objDiv = document.getElementById("messageBox");
    objDiv.scrollTop = objDiv.scrollHeight;

    responding()
  }

  function responding(){
    console.log(rsp);
    document.getElementById(
      "messageBox"
    ).innerHTML += `<div class="second-chat">
    <div class="circle" id="circle-mar"></div>
    <p>${rsp}</p>
    <div class="arrow"></div>
  </div>`
    


  var objDiv = document.getElementById("messageBox");
  objDiv.scrollTop = objDiv.scrollHeight;

  }
//press enter on keyboard and send message
addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    
    const e = document.getElementById("user_input");
    if (e === document.activeElement) {
      userResponse();
    }
  }
});