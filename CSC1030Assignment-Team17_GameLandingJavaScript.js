var usersDetails{"","","","","","","",""};
var validDetails = true;

function startGame(var GameMode){
  collectUsersDetails(var GameMode);
  validateUsersDetails();
  if(validDetails){
    setSessionStorage();
    goToGamePlay();
  }
}

function collectUsersDetails(var GameMode){
  var name = document.getElementByName('Name').value;

  var genderGrp = document.getElementsByName('Gender');
  var gender = "";
  for (var i=0; i<genderGrp.length; i++){
    if(genderGrp[i].checked === true){
      gender = genderGrp[i].value;
    }
  }

  var dateOfBirth = document.getElementByName('DOB').value;

  var backgroundColourGrp = document.getElementsByName('Background Colour');
  var backgroundColour = "";
  for (var i=0; i<backgroundColourGrp.length; i++){
    if(backgroundColourGrp[i].checked === true){
      backgroundColour = backgroundColourGrp[i].value;
    }
  }

  var fontColourGrp = document.getElementsByName('Font colour');
  var fontColour = "";
  for (var i=0; i<fontColourGrp.length; i++){
    if(fontColourGrp[i].checked === true){
      fontColour = fontColourGrp[i].value;
    }
  }

  var fontTypeGrp = document.getElementsByName('Font type');
  var fontType = "";
  for (var i=0; i<fontTypeGrp.length; i++){
    if(fontTypeGrp[i].checked === true){
      fontType = fontTypeGrp[i].value;
    }
  }

  var avatar = "Images/Avatar1.jpg";

  var gameMode = GameMode;

  usersDetails = {
    name:name,
    gender:gender,
    dateOfBirth:dateOfBirth,
    backgroundColour:backgroundColour,
    fontColour:fontColour,
    fontType:fontType,
    avatar:avatar,
    gameMode:gameMode
  };
}

function validateUsersDetails(){
  for(int i = 0; i < usersDetails.length(); i++){
    if(usersDetails[i].value = ""){
      document.getElementByName(usersDetails[i]).style.color = red;
      validDetails = false;
    }
    else{
      document.getElementByName(usersDetails[i]).style.color = black;
    }
  }
}

function setSessionStorage() {
  if (typeof(Storage) !== "undefined") {
    sessionStorage.clear();
    sessionStorage.setItem("player", player);
  }
}

function goToGamePlay() {
  window.location.href = 'CSC1030Assignment-Team17_GamePlay.html';
}

//This function will be used in other HTML forms to get the session storage
function getSessionStorage() {
  var name = sessionStorage.getItem("player.name");
  var gender = sessionStorage.getItem("player.gender");
  var dateOfBirth = sessionStorage.getItem("player.dateOfBirth");
  var backgroundColour = sessionStorage.getItem("player.backgroundColour");
  var fontColour = sessionStorage.getItem("player.fontColour");
  var fontType = sessionStorage.getItem("player.fontType");
  var avatar = sessionStorage.getItem("player.avatar");
  var gameMode = sessionStorage.getItem("player.gameMode");
}
