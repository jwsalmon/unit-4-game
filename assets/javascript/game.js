// variables
var dsChar1 = {
    name: "Boba Fett",
    image: "assets/images/BobaFett.jpeg",
    HP: 100,
    AP: 10,
    CAP: 5,
    Side: "dark"
};
var dsChar2 = {
    name: "Grand Moff Tarkin",
    image: "assets/images/GrandMoffTarkin.jpeg",
    HP: 110,
    AP: 15,
    CAP: 10,
    Side: "dark"
};
var dsChar3 = {
    name: "Count Dooku",
    image: "assets/images/CountDooku.jpeg",
    HP: 120,
    AP: 20,
    CAP: 15,
    Side: "dark"
};
var dsChar4 = {
    name: "Darth Maul",
    image: "assets/images/DarthMaul.jpeg",
    HP: 130,
    AP: 25,
    CAP: 20,
    Side: "dark"
};
var dsChar5 = {
    name: "Darth Vader",
    image: "assets/images/DarthVader.jpeg",
    HP: 140,
    AP: 30,
    CAP: 25,
    Side: "dark"
};
var dsChar6 = {
    name: "Emperor palpatine",
    image: "assets/images/emperorpalpatine1.jpeg",
    HP: 150,
    AP: 35,
    CAP: 30,
    Side: "dark"
};
var lsChar1 = {
    name: "Lando Calrissian",
    image: "assets/images/LandoCalrissian.jpeg",
    HP: 100,
    AP: 10,
    CAP: 5,
    Side: "light"
};
var lsChar2 = {
    name: "Han Solo",
    image: "assets/images/HanSolo.jpeg",
    HP: 110,
    AP: 15,
    CAP: 10,
    Side: "light"
};
var lsChar3 = {
    name: "Luke Skywalker",
    image: "assets/images/LukeSkywalker.jpeg",
    HP: 120,
    AP: 20,
    CAP: 15,
    Side: "light"
};
var lsChar4 = {
    name: "Young Obi Wan",
    image: "assets/images/youngObi-Wan.jpeg",
    HP: 130,
    AP: 25,
    CAP: 20,
    Side: "light"
};
var lsChar5 = {
    name: "Obi Wan Kenobi",
    image: "assets/images/Obi-WanKenobi.jpeg",
    HP: 140,
    AP: 30,
    CAP: 25,
    Side: "light"
};
var lsChar6 = {
    name: "Yoda",
    image: "assets/images/Yoda.jpeg",
    HP: 150,
    AP: 35,
    CAP: 30,
    Side: "light"
};
var darkSide = [dsChar1, dsChar2, dsChar3, dsChar4, dsChar5, dsChar6];
var lightSide = [lsChar1, lsChar2, lsChar3, lsChar4, lsChar5, lsChar6];
var playerChar;
var defenderChar;
var lSCharPick1 = -1;
var lSCharPick2 = -1;
var dSCharPick1 = -1;
var dSCharPick2 = -1;
var attckCharPick = -1;
var charChoiceLSImage = [];
var charChoiceDSImage = [];
var isRestart = false;
var isDefenderCharSel = false;
var isPlayerCharSel = false;

var numPlayerAttacks = 1;
//set up selection area
function selectionAreaSetup(rowTag, indicesArray, charaterArray, index, isPlayerSelection) {
    var choiceDivTag = $("<div>");
    var choiceImgDivTag = $("<div>");
    var choiceImgNampPTag = $("<p>");
    var choiceImageTag = $("<img>");
    var choiceImgEnrgyPTag = $("<p>");
    //setup col div
    choiceDivTag.addClass("col-md-2");
    //setup Image Dive
    choiceImgDivTag.addClass("CharImg");
    //setup Name <p> tag
    var charNameId = "";
    //setup Name p tag ID: it is set different based on whether we are setting up
    // Player selection area or Defender area
    if (isPlayerSelection) {
        charNameId = "CharName" + index;
    }
    else {
        charNameId = "defCharName" + index;
    }
    choiceImgNampPTag.attr("id", charNameId);
    choiceImgNampPTag.text(charaterArray[indicesArray[index]].name);
    //setup HP <p> tag: setup ID based on whether we are setting up 
    //Player selection area or Defender area
    var charEnergyID = "";
    if (isPlayerSelection) {
        charEnergyID = "CharEnergy" + index;
    }
    else {
        charEnergyID = "defCharEnergy" + index;

    }
    choiceImgEnrgyPTag.attr("id", charEnergyID);
    choiceImgEnrgyPTag.text(charaterArray[indicesArray[index]].HP);

    choiceImageTag.attr("src", charaterArray[indicesArray[index]].image);
    choiceImageTag.attr("alt", "default");
    choiceImageTag.attr("height", "150px");
    choiceImageTag.attr("width", "150px");
    //setup click class: set to different classe based on whether we are setting up
    //Player selection area or Defendor area
    if (isPlayerSelection) {
        choiceImageTag.addClass("charBtn");
    }
    else {
        choiceImageTag.addClass("btnDefChar");
    }
    choiceImageTag.attr("Data-Side", charaterArray[indicesArray[index]].Side);
    choiceImageTag.attr("Data-CharObj", indicesArray[index]);
    choiceImgDivTag.append(choiceImgNampPTag);
    choiceImgDivTag.append(choiceImageTag);
    choiceImgDivTag.append(choiceImgEnrgyPTag);
    choiceDivTag.append(choiceImgDivTag);
    rowTag.append(choiceDivTag);
}

//clean up layout for start of game
function gameReset() {
    var rowTag = $("#SelectRow");
    isDefenderCharSel = false;
    isPlayerCharSel = false;
    //hide div since player hasn't selected charater
    rowTag.empty();
    $("#plyAnounce").empty();
    $("#defAnounce").empty();
    $("#SelectedChar").hide();
    $(".defnderRow").empty();
    $(".selDefnderRow").hide();
    $("#SelectRow").show();

    playerChar = {};
    defenderChar = {};
    charChoiceLSImage = [];
    charChoiceDSImage = [];

    //setup player selection area
    lSCharPick1 = Math.floor(Math.random() * lightSide.length);
    lSCharPick2 = Math.floor(Math.random() * lightSide.length);
    while (lSCharPick1 === lSCharPick2) {
        lSCharPick2 = Math.floor(Math.random() * lightSide.length);
    }
    dSCharPick1 = Math.floor(Math.random() * darkSide.length);
    dSCharPick2 = Math.floor(Math.random() * darkSide.length);
    while (dSCharPick1 === dSCharPick2) {
        dSCharPick2 = Math.floor(Math.random() * darkSide.length);
    }
    charChoiceLSImage.push(lSCharPick1);
    charChoiceLSImage.push(lSCharPick2);
    charChoiceDSImage.push(dSCharPick1);
    charChoiceDSImage.push(dSCharPick2);
    for (var i = 0; i < charChoiceDSImage.length; i++) {
        selectionAreaSetup(rowTag, charChoiceDSImage, darkSide, i, true);
    }
    for (var i = 0; i < charChoiceLSImage.length; i++) {
        selectionAreaSetup(rowTag, charChoiceLSImage, lightSide, i, true);
    }
    if (isRestart){
        $(".charBtn").on("click", selectPlayer);
    }
}

//let player select charater
//(optional added selection light or dark side)
function selectPlayer() {
    console.log("we are in click method for selecting player charater");
    //setup player Selection
    var pCharater = {};
    console.log("you selected a " + $(this).attr("Data-Side") + " charater");
    if ($(this).attr("Data-Side") === "dark") {
        pCharater = darkSide[$(this).attr("Data-CharObj")];
        playerChar = Object.create(pCharater);
    }
    else {
        pCharater = lightSide[$(this).attr("Data-CharObj")];
        playerChar = Object.create(pCharater);
    }
    console.log(playerChar);
    $("#selCharName").text(playerChar.name);
    $("#selCarImg").attr("src", playerChar.image);
    $("#SelCharEnergy").text(playerChar.HP);
    $("#SelectedChar").show();
    $("#SelectRow").hide();
    //setup Attackers
    attckCharPick = Math.floor(Math.random() * lightSide.length);
    //make sure attack char pick is not in dark side charater array
    while (charChoiceDSImage.indexOf(attckCharPick) !== -1) {
        attckCharPick = Math.floor(Math.random() * lightSide.length);
    }
    //add attack char pick to dark side charater array
    charChoiceDSImage.push(attckCharPick);
    //make sure attack char pick is not in light side charater array
    while (charChoiceLSImage.indexOf(attckCharPick) !== -1) {
        attckCharPick = Math.floor(Math.random() * lightSide.length);
    }
    //add attack char pick to light side charater array
    charChoiceLSImage.push(attckCharPick);


    var rowTag = $(".defnderRow");
    //rowTag.empty();
    if (playerChar.Side === "dark") {//set light Side Defenders
        for (var i = 0; i < charChoiceLSImage.length; i++) {
            selectionAreaSetup(rowTag, charChoiceLSImage, lightSide, i, false);
        }
    }
    else {//set Dark side defenders
        for (var i = 0; i < charChoiceDSImage.length; i++) {
            selectionAreaSetup(rowTag, charChoiceDSImage, darkSide, i, false);
        }
    }
    //click method for Defender Charater Select
    $(".btnDefChar").on("click", selDefender);
    //   rowTag.show();
    isPlayerCharSel = true;
}


//let player select Defender 
function selDefender() {
    var remDefender;
    var dCharater = {};
    var rowTag = $(".defnderRow");
    rowTag.empty();
    $("#plyAnounce").empty();
    $("#defAnounce").empty();
    console.log("We just entered select Defender");
    console.log("defender is a " + $(this).attr("Data-Side") + " side charater")
    if ($(this).attr("Data-Side") === "dark") {
        dCharater = darkSide[$(this).attr("Data-CharObj")];
        defenderChar = Object.create(dCharater);
        //remove selected defender from dark side charater array
        var charNum = parseInt($(this).attr("Data-CharObj"));
        remDefender = charChoiceDSImage.indexOf(charNum);
        charChoiceDSImage.splice(remDefender, 1);
        for (var i = 0; i < charChoiceDSImage.length; i++) {
            selectionAreaSetup(rowTag, charChoiceDSImage, darkSide, i, false);
        }

    }
    else {
        dCharater = lightSide[$(this).attr("Data-CharObj")];
        defenderChar = Object.create(dCharater);
        //console.log($(this).attr("Data-CharObj"));
        //remove selected defender from dark side charater array
        var charNumb = parseInt($(this).attr("Data-CharObj"));
        remDefender = charChoiceLSImage.indexOf(charNumb);
        //console.log("removing index " + remDefender);
        //console.log(charChoiceLSImage);
        charChoiceLSImage.splice(remDefender, 1);
        //console.log(charChoiceLSImage);
        for (var i = 0; i < charChoiceLSImage.length; i++) {
            selectionAreaSetup(rowTag, charChoiceLSImage, lightSide, i, false);
        }
    }
    console.log(defenderChar);
    $("#selDefCharName").text(defenderChar.name);
    $("#selDefenderImg").attr("src", defenderChar.image);
    $("#selDefCharEnergy").text(defenderChar.HP);
    $(".selDefnderRow").show();
    //click method for Defender Charater Select
    $(".btnDefChar").on("click", selDefender);
    isDefenderCharSel = true;
}

function winner() {
    /*need to remove loosing defender anounce defeat of defender and
     ask to select new defender if there is one
     if no more defender anouce win show restart button*/
    $(".selDefnderRow").hide();
    $("#plyAnounce").empty();
    $("#defAnounce").empty();
    //add button to restart
    var button = $("<button>");
    button.text("restart");
    button.addClass("restart");
    button.on("click", gameReset);

    if (playerChar.Side == "dark") {
        if (charChoiceLSImage.length > 0) {
            $("#plyAnounce").text("You have defeated " + defenderChar.name + "! You can choose another enemy to fight. ");
            defenderChar = {};
            isDefenderCharSel = false;
        }
        else {
            $("#plyAnounce").text("You Won!!!! GAME OVER!!!");
            $("#plyAnounce").append("<br>");
            $("#plyAnounce").append(button);
            isRestart = true;
            isDefenderCharSel = false;
        }
    }
    else{
        if (charChoiceLSImage.length > 0) {
            $("#plyAnounce").text("You have defeated " + defenderChar.name + "! You can choose another enemy to fight. ");
            defenderChar = {};
            isDefenderCharSel = false;
        }
        else {
            $("#plyAnounce").text("You Won!!!! GAME OVER!!!");
            $("#plyAnounce").append("<br>");
            $("#plyAnounce").append(button);
            isRestart = true;
            isDefenderCharSel = false;
        }

    }

}
function looser() {
    //clear announcements and then annouce loss.
    $("#plyAnounce").empty();
    $("#defAnounce").empty();
    $("#plyAnounce").text("You have been defeated ... GAME OVER!!!");
    //add button to restart
    var button = $("<button>");
    button.text("restart");
    button.addClass("restart");
    $("#plyAnounce").append("<br>");
    $("#plyAnounce").append(button);
    button.on("click", gameReset);
    isRestart = true;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
/*Attack logic:
  when click on attack button
  player charater attacks with set attack power,
  this attack power increases on each attack.
  Defender will counter attack with set counter power,which 
  does not increase */
function playerAttack() {
     if ( !(isDefenderCharSel) && !(isPlayerCharSel)) {
        return;
    }
    else if (!(isDefenderCharSel)){
        $("#plyAnounce").text("No defender here")
        return;
    } 
    var playerAttck = playerChar.AP * numPlayerAttacks;
    var announce = "You attacked " + defenderChar.name + " for " + playerAttck + " damage";
    var announce2 = defenderChar.name + " attacked you back for " + defenderChar.CAP + " damage";
    $("#plyAnounce").text(announce);
    $("#defAnounce").text(announce2);
    defenderChar.HP -= playerAttck;
    numPlayerAttacks++;
    playerChar.HP -= defenderChar.CAP;
    $("#selDefCharEnergy").text(defenderChar.HP);
    $("#SelCharEnergy").text(playerChar.HP);

    if (defenderChar.HP <= 0) {
        winner();
    }

    if (playerChar.HP <= 0) {
        looser();
    }

}

$(document).ready(function () {
    //reset page for start of game
    gameReset();


    //click method for Player Charater Select
    $(".charBtn").on("click", selectPlayer);
    $(".Attack").on("click", playerAttack);






    //end program;
});