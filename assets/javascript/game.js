
$(document).ready(function () {

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
    var DefenderChar;
    var lSCharPick1 = -1;
    var lSCharPick2 = -1;
    var dSCharPick1 = -1;
    var dSCharPick2 = -1;
    var attckCharPick = -1;
    var charChoiceLSImage = [];
    var charChoiceDSImage = [];

    var numPlayerAttacks = 1;

    //clean up layout for start of game
    function gameReset() {
        //setup player selection area
        lSCharPick1 = Math.floor(Math.random() * lightSide.length);
        lSCharPick2 = Math.floor(Math.random() * lightSide.length);
        if (lSCharPick1 === lSCharPick2) {
            lSCharPick2 = Math.floor(Math.random() * lightSide.length);
        }
        dSCharPick1 = Math.floor(Math.random() * darkSide.length);
        dSCharPick2 = Math.floor(Math.random() * darkSide.length);
        if (dSCharPick1 === dSCharPick2) {
            dSCharPick2 = Math.floor(Math.random() * darkSide.length);
        }
        charChoiceLSImage.push(lSCharPick1);
        charChoiceLSImage.push(lSCharPick2);
        charChoiceDSImage.push(dSCharPick1);
        charChoiceDSImage.push(dSCharPick2);
        for (var i = 0; i < charChoiceDSImage.length; i++) {
            var dsChoiceDivTag = $("<div>");
            var dsChoiceImgDivTag = $("<div>");
            var dsChoiceImgNampPTag = $("<p>");
            var dsChoiceImageTag = $("<img>");
            var dsChoiceImgEnrgyPTag = $("<p>");
            //setup col div
            dsChoiceDivTag.addClass("col-md-2 rowCharChoice");
            //setup Image Dive
            dsChoiceImgDivTag.addClass("CharImg");
            //setup Name <p> tag
            var charNameId = "CharName" + i;
            dsChoiceImgNampPTag.attr("id", charNameId);
            dsChoiceImgNampPTag.text(darkSide[charChoiceDSImage[i]].name);
            //setup HP <p> tag
            var charEnergyID = "CharEnergy" + i;
            dsChoiceImgEnrgyPTag.attr("id",charEnergyID);
            dsChoiceImgEnrgyPTag.text(darkSide[charChoiceDSImage[i]].HP);

            dsChoiceImageTag.attr("src", darkSide[charChoiceDSImage[i]].image);
            dsChoiceImageTag.attr("alt", "default");
            dsChoiceImageTag.attr("height", "150px");
            dsChoiceImageTag.attr("width", "150px");
            dsChoiceImageTag.addClass("charBtn");
            dsChoiceImageTag.attr("Data-Side",darkSide[charChoiceDSImage[i]].Side);
            dsChoiceImageTag.attr("Data-CharObj",charChoiceDSImage[i]);
           // console.log(darkSide[charChoiceDSImage[i]].image)
           // console.log(dsChoiceImageTag);
            dsChoiceImgDivTag.append(dsChoiceImgNampPTag);
            dsChoiceImgDivTag.append(dsChoiceImageTag);
            dsChoiceImgDivTag.append(dsChoiceImgEnrgyPTag);
            dsChoiceDivTag.append(dsChoiceImgDivTag);
            
           // console.log(dsChoiceDivTag);
            $("#SelectRow").append(dsChoiceDivTag);
           
        }
        for (var i = 0; i < charChoiceLSImage.length; i++) {
            var lsChoiceDivTag = $("<div>");
            var lsChoiceImgDivTag = $("<div>");
            var lsChoiceImgNampPTag = $("<p>");
            var lsChoiceImageTag = $("<img>");
            var lsChoiceImgEnrgyPTag = $("<p>");
            //setup col div
            lsChoiceDivTag.addClass("col-md-2 rowCharChoice");
            //setup Image Dive
            lsChoiceImgDivTag.addClass("CharImg");
            //setup Name <p> tag
            var charNameId = "CharName" + i;
            lsChoiceImgNampPTag.attr("id", charNameId);
            lsChoiceImgNampPTag.text(lightSide[charChoiceLSImage[i]].name);
            //setup HP <p> tag
            var charEnergyID = "CharEnergy" + i;
            lsChoiceImgEnrgyPTag.attr("id",charEnergyID);
            lsChoiceImgEnrgyPTag.text(lightSide[charChoiceLSImage[i]].HP);

            lsChoiceImageTag.attr("src", lightSide[charChoiceLSImage[i]].image);
            lsChoiceImageTag.attr("alt", "default");
            lsChoiceImageTag.attr("height", "150px");
            lsChoiceImageTag.attr("width", "150px");
            lsChoiceImageTag.addClass("charBtn");
            dsChoiceImageTag.attr("Data-Side",lightSide[charChoiceLSImage[i]].Side);
            dsChoiceImageTag.attr("Data-CharObj",charChoiceLSImage[i]);
            //console.log(lightSide[charChoiceLSImage[i]].image)
            //console.log(lsChoiceImageTag);
            lsChoiceImgDivTag.append(lsChoiceImgNampPTag);
            lsChoiceImgDivTag.append(lsChoiceImageTag);
            lsChoiceImgDivTag.append(lsChoiceImgEnrgyPTag);
            lsChoiceDivTag.append(lsChoiceImgDivTag);
            
            //console.log(lsChoiceDivTag);
            $("#SelectRow").append(lsChoiceDivTag);

        }
        //hide div since player hasn't selected charater
        $("#SelectedChar").hide();
        $(".defnderRow").hide();
        $(".defnderRow1").hide();
        playerChar = {};
        DefenderChar = {};


    }

    window.onload = gameReset();
    //let player select charater
    //(optional add possibity of selecting light or dark side)
    $(".charBtn").on("click", function () {
        console.log("we are in click method for selecting player charater");
        //setup player Selection
        console.log("you selected a " + $(this).attr("Data-Side") + " charater");
        if ($(this).attr("Data-Side") === "dark") {
            playerChar = darkSide[$(this).attr("Data-CharObj")];
        }
        else {
            playerChar = lightSide[$(this).attr("Data-CharObj")];
        }
        console.log(playerChar);
        $("#selCharName").text(playerChar.name);
        $("#selCarImg").attr("src", playerChar.image);
        $("#SelCharEnergy").text(playerChar.HP);
        $("#SelectedChar").show();

        //setup Attackers
        attckCharPick = Math.floor(Math.random() * lightSide.length);
        if ((attckCharPick === lSCharPick1) || (attckCharPick === lSCharPick2) ||
            (attckCharPick === dSCharPick1) || (attckCharPick === dSCharPick2)) {
            attckCharPick = Math.floor(Math.random() * lightSide.length);
        }
        if (playerChar.Side === "dark") {//set Dark Side Defenders

            $("#defCharName1").text(lightSide[lSCharPick1].name);
            $("#defCharImg1").attr("src", lightSide[lSCharPick1].image);
            $("#defCharEnergy1").text(lightSide[lSCharPick1].HP);
            $(".defChoice").attr("value", lightSide[lSCharPick1]);
            $("#defCharName2").text(lightSide[dSCharPick2].name);
            $("#defCharImg2").attr("src", lightSide[lSCharPick2].image);
            $("#defCharEnergy2").text(lightSide[lSCharPick2].HP);
            $(".CharChoice").attr("Data-CharObj", lightSide[lSCharPick2]);
            $("#defCharName3").text(lightSide[attckCharPick].name);
            $("#defCharImg3").attr("src", lightSide[attckCharPick].image);
            $("#defCharEnergy3").text(lightSide[attckCharPick].HP);
            $(".CharChoice").attr("Data-CharObj", lightSide[attckCharPick]);
            $(".defnderRow").show();
        }
        else {
            $("#defCharName1").text(darkSide[dSCharPick1].name);
            $("#defCharImg1").attr("src", darkSide[dSCharPick1].image);
            $("#defCharEnergy1").text(darkSide[dSCharPick1].HP);
            $(".defChoice").attr("value", darkSide[dSCharPick1]);
            $("#defCharName2").text(darkSide[dSCharPick2].name);
            $("#defCharImg2").attr("src", darkSide[dSCharPick2].image);
            $("#defCharEnergy2").text(darkSide[dSCharPick2].HP);
            $(".CharChoice").attr("Data-CharObj", darkSide[dSCharPick2]);
            $("#defCharName3").text(darkSide[attckCharPick].name);
            $("#defCharImg3").attr("src", darkSide[attckCharPick].image);
            $("#defCharEnergy3").text(darkSide[attckCharPick].HP);
            $(".CharChoice").attr("Data-CharObj", darkSide[attckCharPick]);
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