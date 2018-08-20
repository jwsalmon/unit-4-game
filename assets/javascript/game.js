
$(document).ready(function() {

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
var darkSide = [dsChar1,dsChar2,dsChar3,dsChar4,dsChar5,dsChar6];
var lightSide = [lsChar1,lsChar2,lsChar3,lsChar4,lsChar5,lsChar6];
var playerChar;
var DefenderChar;
var lSCharPick1 = -1;
var lSCharPick2 = -1;
var dSCharPick1 = -1;
var dSCharPick2 = -1;
var attckCharPick = -1;


var numPlayerAttacks = 1;

//clean up layout for start of game
function gameReset(){
    //setup player selection area
    lSCharPick1 = Math.floor(Math.random() * lightSide.length);
    lSCharPick2 = Math.floor(Math.random() * lightSide.length);
    if (lSCharPick1 === lSCharPick2){
        lSCharPick2 = Math.floor(Math.random() * lightSide.length);
    }
    dSCharPick1 = Math.floor(Math.random() * darkSide.length);
    dSCharPick2 = Math.floor(Math.random() * darkSide.length);
    if (dSCharPick1 === dSCharPick2){
        dSCharPick2 = Math.floor(Math.random() * darkSide.length);
    }
    $("#CharName1").text(lightSide[lSCharPick1].name);
    $("#charImg1").attr("src", lightSide[lSCharPick1].image);
    $("#CharEnergy1").text(lightSide[lSCharPick1].HP);
    $(".CharChoice").attr("value",lightSide[lSCharPick1]);
    $("#CharName2").text(lightSide[lSCharPick2].name);
    $("#charImg2").attr("src", lightSide[lSCharPick2].image);
    $("#CharEnergy2").text(lightSide[lSCharPick2].HP);
    $(".CharChoice").attr("value",lightSide[lSCharPick2]);
    $("#CharName3").text(darkSide[dSCharPick1].name);
    $("#charImg3").attr("src", darkSide[dSCharPick1].image);
    $("#CharEnergy3").text(darkSide[dSCharPick1].HP);
    $(".CharChoice").attr("value",darkSide[dSCharPick1]);
    $("#CharName4").text(darkSide[dSCharPick2].name);
    $("#charImg4").attr("src", darkSide[dSCharPick2].image);
    $("#CharEnergy4").text(darkSide[dSCharPick2].HP);
    $(".CharChoice").attr("Data-CharObj",darkSide[dSCharPick2]);
    //hide div since player hasn't selected charater
    $("#SelectedChar").hide();
    $(".defnderRow").hide();
    $(".defnderRow1").hide();

}

window.onload = gameReset();
//let player select charater
//(optional add possibity of selecting light or dark side)
$(".charBtn").on("click", function(){
    console.log("we are in click method for selecting player charater");
    //setup player Selection
    playerChar = $(".CharChoice").attr("Data-CharObj");
    $("#selCharName").text(playerChar.name);
    $("#selCarImg").attr("src",playerChar.image);
    $("#SelCharEnergy").text(playerChar.HP);
    $("#SelectedChar").show();

    //setup Attackers
    attckCharPick = Math.floor(Math.random() * lightSide.length);
    if ((attckCharPick === lSCharPick1) || (attckCharPick === lSCharPick2) || 
         (attckCharPick === dSCharPick1) || (attckCharPick === dSCharPick2)){
            attckCharPick = Math.floor(Math.random() * lightSide.length); 
         }
    if( playerChar.Side === "dark"){//set Dark Side Defenders
        
        $("#defCharName1").text(lightSide[lSCharPick1].name);
        $("#defCharImg1").attr("src", lightSide[lSCharPick1].image);
        $("#defCharEnergy1").text(lightSide[lSCharPick1].HP);
        $(".defChoice").attr("value",lightSide[lSCharPick1]);
        $("#defCharName2").text(lightSide[dSCharPick2].name);
        $("#defCharImg2").attr("src", lightSide[lSCharPick2].image);
        $("#defCharEnergy2").text(lightSide[lSCharPick2].HP);
        $(".CharChoice").attr("Data-CharObj",lightSide[lSCharPick2]);
        $("#defCharName3").text(lightSide[attckCharPick].name);
        $("#defCharImg3").attr("src", lightSide[attckCharPick].image);
        $("#defCharEnergy3").text(lightSide[attckCharPick].HP);
        $(".CharChoice").attr("Data-CharObj",lightSide[attckCharPick]);    
        $(".defnderRow").show();
    }
    else{
        $("#defCharName1").text(darkSide[dSCharPick1].name);
        $("#defCharImg1").attr("src", darkSide[dSCharPick1].image);
        $("#defCharEnergy1").text(darkSide[dSCharPick1].HP);
        $(".defChoice").attr("value",darkSide[dSCharPick1]);
        $("#defCharName2").text(darkSide[dSCharPick2].name);
        $("#defCharImg2").attr("src", darkSide[dSCharPick2].image);
        $("#defCharEnergy2").text(darkSide[dSCharPick2].HP);
        $(".CharChoice").attr("Data-CharObj",darkSide[dSCharPick2]);
        $("#defCharName3").text(darkSide[attckCharPick].name);
        $("#defCharImg3").attr("src", darkSide[attckCharPick].image);
        $("#defCharEnergy3").text(darkSide[attckCharPick].HP);
        $(".CharChoice").attr("Data-CharObj",darkSide[attckCharPick]);    
        $(".defnderRow").show();
       
    }


});

//let player select Defender, 


/*Attack logic:
  when click on attack button
  player charater attacks with set attack power,
  this attack power increases on each attack.
  Defender will counter attack with set counter power,which 
  does not increase */



  //end program;
});