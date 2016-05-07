$(document).ready(function () {
    /* Attack & MP tab calculations */
    function swordCalculation() {
        var str = $("#swdStr").val();
        var quick = $("#swdQuick").val();
        var wepDmg = $("#swdWepDmg").val();

        var answer = Math.round((Math.sqrt(str * quick)) * wepDmg * 0.08005);
        $("#swdRes").val(answer.toFixed(0));
    }

    $("#swdStr, #swdQuick, #swdWepDmg").on("input", swordCalculation);

    $("#swdReset").click(function () {
        $("#swdStr").val("");
        $("#swdQuick").val("");
        $("#swdWepDmg").val("");
    });

    function magicCalculation() {
        var lvl = $("#magLvl").val();
        var intel = $("#magIntel").val();
        var dex = $("#magDex").val();
        var classDmg = $("#magClassDmg").val();
        var spellDmg = $("#magSpellDmg").val();

        var answer = Math.floor(lvl * Math.sqrt(intel * dex) * (1 + classDmg / 100) * (1 + spellDmg / 100));
        $("#magRes").val(answer.toFixed(0));
    }

    $("#magLvl, #magIntel, #magDex, #magClassDmg, #magSpellDmg").on("input", magicCalculation);

    $("#magReset").click(function () {
        $("#magLvl").val("");
        $("#magIntel").val("");
        $("#magDex").val("");
        $("#magClassDmg").val("");
        $("#magSpellDmg").val("");
    });

    function gunCalculation() {
        var dex = $("#gunDex").val();
        var quick = $("#gunQuick").val();
        var wepDmg = $("#gunWepDmg").val();

        var answer = Math.floor(Math.sqrt(dex * quick) * wepDmg * 0.08005);
        $("#gunRes").val(answer.toFixed(0));
    }

    $("#gunDex, #gunQuick, #gunWepDmg").on("input", gunCalculation);

    $("#gunReset").click(function () {
        $("#gunDex").val("");
        $("#gunQuick").val("");
        $("#gunWepDmg").val("");
    });

    /* Skill Points calculations */
    function skillPointsCalculation() {
        var swd = $("#spSwdSkill").val();
        var mag = $("#spMagSkill").val();
        var gun = $("#spGunSkill").val();
        var intel = $("#spIntel").val();
        var factPts = $("#spFactPts").val();
        var classBonus = $("#spClassBonus").val();
        var guildBonus = $("#spGuildBonus").val();

        if (swd == 0 && mag == 0 && intel == 0 && classBonus == 0 && guildBonus == 0 && factPts == 0) {
            $("#spRes").val(0);
        } else {
            var total1 = (intel * (+swd + (2 * mag) + +gun) / 6);
            var total2 = +swd + +gun;
            var total3 = Math.min(30, swd) + Math.min(30, mag) + Math.min(30, gun);
            var total4 = Math.max(0, swd - mag) + Math.max(0, gun - mag);

            var baseSP = +total1 + +total2 + +total3 + +total4 + +intel - 7;
            var spBonus = +classBonus + +guildBonus + +factPts;

            var answer = baseSP + spBonus;
            $("#spRes").val(answer.toFixed(0));
        }
    }

    $("#spSwdSkill, #spMagSkill, #spGunSkill, #spIntel, #spFactPts, #spClassBonus, #spGuildBonus").on("input", skillPointsCalculation);

    $("#spReset").click(function () {
        $("#spSwdSkill").val("");
        $("#spMagSkill").val("");
        $("#spGunSkill").val("");
        $("#spIntel").val("");
        $("#spFactPts").val("");
        $("#spClassBonus").val("");
        $("#spGuildBonus").val("");
    });

    /* Health & Defense calculations */
    function healthCalculations() {
        var lvl = $("#hpLevel").val();
        var con = $("#hpCon").val();

        var answer = lvl * con * 2;
        $("#hpRes").val(answer);
    }

    $("#hpLevel, #hpCon").on("input", healthCalculations);

    $("#hpReset").click(function () {
        $("#hpLevel").val("");
        $("#hpCon").val("");
    });

    function defenseCalculations() {
        var armPro = $("#defArmPro").val();
        var ringPro = $("#defRingPro").val();
        var quick = $("#defQuick").val();

        if (armPro == 0 && ringPro == 0 && quick == 0) {
            $("#defRes").val(0);
        } else {
            var answer = +armPro + +ringPro + +quick - 5;
            $("#defRes").val(answer);
        }
    }

    $("#defArmPro, #defRingPro, #defQuick").on("input", defenseCalculations);

    $("#defReset").click(function () {
        $("#defArmPro").val("");
        $("#defRingPro").val("");
        $("#defQuick").val("");
    });

    /* Chest calculations */
    function chestAnimalsFarm() {
        var heads = $("#animHeads").val();
        var legs = $("#animLegs").val();

        if ($("#checkChickens").prop("checked") && $("#checkCows").prop("checked")) {
            var chickens = 3 * heads - legs;
            var cows = legs - 2 * heads;

            $("#animChickRes").val(chickens);
            $("#animCowRes").val(cows);
            $("#animHorseRes").val("");
        }

        if ($("#checkChickens").prop("checked") && $("#checkHorses").prop("checked")) {
            var chickens = 12;
            var horses = 54;

            $("#animChickRes").val(chickens);
            $("#animHorseRes").val(horses);
            $("#animCowRes").val("");
        }

        if ($("#checkCows").prop("checked") && $("#checkHorses").prop("checked")) {
            var cows = 4 * heads - legs;
            var horses = legs - 3 * heads;

            $("#animCowRes").val(cows);
            $("#animHorseRes").val(horses);
            $("#animChickRes").val("");
        }

        if ($("#checkChickens").prop("checked") && $("#checkCows").prop("checked") && $("#checkHorses").prop("checked")) {
            $("#animChickRes").val("");
            $("#animCowRes").val("");
            $("#animHorseRes").val("");
        }
    }

    $("#animHeads, #animLegs").on("input", chestAnimalsFarm);

    $("#animReset").click(function () {
        $("#animHeads").val("");
        $("#animLegs").val("");
    });

    function chestAge() {
        var current = $("#curFutAge").val();
        var future = $("#curFutAge").val();
        var years = $("#curFutYears").val();

        if ($("#radioCurrent").prop("checked")) {
            var answer = +current + +years;
            $("#curFutRes").val(answer);
            $("#radioFuture").prop("checked", false)
        }

        if ($("#radioFuture").prop("checked")) {
            var answer = future - years;
            $("#curFutRes").val(answer);
        }
    }
    $("#curFutAge, #curFutAge, #curFutYears").on("input", chestAge);

    $("#curFutReset").click(function () {
        $("#curFutAge").val("");
        $("#curFutYears").val("");
    });

    function chestGalCon() {
        var gallons = $("#golGal").val();
        var containers = $("#golCon").val();

        var answer = Math.floor(gallons / containers);
        $("#golRes").val(answer);
    }
    $("#golGal, #golCon").on("input", chestGalCon);

    $("#golReset").click(function () {
        $("#golGal").val("");
        $("#golCon").val("");
    });

    /* Tab glyphicons */
    $("#attkMpSpan").show();
    $("#spSpan").hide();
    $("#hpDefSpan").hide();
    $("#chestSpan").hide();

    $("#attkMpTab").click(function () {
        $("#attkMpSpan").show();
        $("#spSpan").hide();
        $("#hpDefSpan").hide();
        $("#chestSpan").hide();
    });

    $("#spTab").click(function () {
        $("#attkMpSpan").hide();
        $("#spSpan").show();
        $("#hpDefSpan").hide();
        $("#chestSpan").hide();
    });

    $("#hpDefTab").click(function () {
        $("#attkMpSpan").hide();
        $("#spSpan").hide();
        $("#hpDefSpan").show();
        $("#chestSpan").hide();
    });

    $("#chestTab").click(function () {
        $("#attkMpSpan").hide();
        $("#spSpan").hide();
        $("#hpDefSpan").hide();
        $("#chestSpan").show();
    });





    // End of document.ready
});
