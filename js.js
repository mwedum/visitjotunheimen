var width = $( document ).width()+20;
    console.log("Document -" + width);
    console.log("Window - " + $( window ).width());
    
    var bildecounter = 1;
    var svg = document.getElementById("svgFile"); 
    var factor = 0.102339181;
    var midtskille;
    var n1;
    var mobile = false;
    //svg.setAttribute("data", "Mobil_vinterkampanje.svg");
    //if(width < 1024) {
        factor = 0.214655811;
        midtskille = width*6.935;
        mobile = true;
        svg.setAttribute("data", "Mobil_vinterkampanje.svg");
   /* } else {
        midtskille = width*1.60818713;
        svg.setAttribute("data", "Vinterkampanje.svg");
    } */

$(window).on('load', function() {
    var start = width * factor;
    
    $(".topp").css('top',start + "px");
     
    $(".midtskille").css('height', midtskille + "px");
    
    var n1height;
    //Nytt fra fjellet
    if(mobile == true) {n1height = width * 0.6; } 
    else { n1height = width * 0.32602;}
    $(".n1").css('top', midtskille+"px");
    $(".n1").css('height', n1height+"px");
    
    //Samarbeidspart
    //501px 1468 width KORREKT
    var top = midtskille + n1height;
    var n2height = width * 0.3662;
    if(mobile == true) {  n2height = width * 1.15  ;}
    $(".n2").css('top', top+"px");
    $(".n2").css('height', n2height+"px");
    
    //Guida turer
    top += n2height;
    var n3height = width * 0.595;
    if(mobile == true) {n3height = width* 1.15;}
    $(".n3").css('top', top+"px");
    $(".n3").css('height', n3height+"px");
    
    //Turbeskrivingar
    top += n3height;
    var n4height = width * 0.605;
    if(mobile == true) { n4height = width * 1.15;}
    $(".n4").css('top', top+"px");
    $(".n4").css('height', n4height+"px");
    
    top += n4height;
    var n5height = width * 0.61;
    if(mobile == true) { n5height = width * 0.65;}
    $(".n5").css('top', top+"px");
    $(".n5").css('height', n5height+"px");
    
    
    top += n5height;
    var n6height = width * 0.368;
    if(mobile == true) { n6height = width * 1.1;}

    $(".n6").css('top', top+"px");
    $(".n6").css('height', n6height+"px");
    
    top += n6height;
    var n7height = width * 0.45;
    if(mobile == true) {n7height = width * 0.8;}
    $(".n7").css('top', top+"px");
    $(".n7").css('height', n7height+"px");
    
    top += n7height;
    var n8height = width * 0.4861;
    $(".n8").css('top', top+"px");
    $(".n8").css('height', n8height+"px");
    
    
    
    var svgDoc = svg.contentDocument;
    
    var fossheim = svgDoc.getElementById("fossheim");
    var nordal = svgDoc.getElementById("nordal");
    var fossberg = svgDoc.getElementById("fossberg");
    var fjellogfritid = svgDoc.getElementById("fjellogfritid");
    var roisheim = svgDoc.getElementById("roisheim");
    var raubergstulen = svgDoc.getElementById("raubergstulen");
    var spiterstulen = svgDoc.getElementById("spiterstulen");
    var juvass = svgDoc.getElementById("juvasshytta");
    var jotunheimenfjellstue = svgDoc.getElementById("jotunheimenfjellstue");
    var bessheim = svgDoc.getElementById("bessheim");
    var leirvassbu = svgDoc.getElementById("leirvassbu");
    var glitterheim = svgDoc.getElementById("glitterheim");
    var sognefjellshytta1 = svgDoc.getElementById("sognefjellshytta1");
    var memurbu = svgDoc.getElementById("memurbu");
    var gjendesheim = svgDoc.getElementById("gjendesheim");
    var turtagro = svgDoc.getElementById("turtagro");
    var krossbu = svgDoc.getElementById("krosbu");
    var sognefjellshytta2;
    var skilt;
    if(width >= 1024) {
        sognefjellshytta2 = svgDoc.getElementById("sognefjellshytta2");
        skilt = svgDoc.getElementById("skilt");
    }

    
    fossheim.addEventListener("mousedown", function () { showHytte("bokser/fossheim.html"); }, false);
    nordal.addEventListener("mousedown", function () { showHytte("bokser/nordal.html"); }, false);
    fossberg.addEventListener("mousedown", function () { showHytte("bokser/fossberg.html"); }, false);
    fjellogfritid.addEventListener("mousedown", function () { showHytte("bokser/fjellogfritid.html"); }, false);
    roisheim.addEventListener("mousedown", function () { showHytte("bokser/roisheim.html"); }, false);
    raubergstulen.addEventListener("mousedown", function () { showHytte("bokser/raubergstulen.html"); }, false);
    spiterstulen.addEventListener("mousedown", function () { showHytte("bokser/spiterstulen.html"); }, false);
    juvass.addEventListener("mousedown", function () { showHytte("bokser/juvasshytta.html"); }, false);                   
    jotunheimenfjellstue.addEventListener("mousedown", function () { showHytte("bokser/jotunheimenfjellstue.html"); }, false);
    bessheim.addEventListener("mousedown", function () { showHytte("bokser/bessheim.html"); }, false);
    leirvassbu.addEventListener("mousedown", function () { showHytte("bokser/leirvassbu.html"); }, false);
    glitterheim.addEventListener("mousedown", function () { showHytte("bokser/glitterheim.html"); }, false);
    sognefjellshytta1.addEventListener("mousedown", function () { showHytte("bokser/sognefjellshytta.html"); }, false);
    memurbu.addEventListener("mousedown", function () { showHytte("bokser/memurbu.html"); }, false);
    gjendesheim.addEventListener("mousedown", function () { showHytte("bokser/gjendesheim.html"); }, false);
    krossbu.addEventListener("mousedown", function () { showHytte("bokser/krossbu.html"); }, false);
    if(width >= 1024) {
        sognefjellshytta2.addEventListener("mousedown", function () { showHytte("bokser/sognefjellshytta.html"); }, false);
        skilt.addEventListener("mousedown", function () { showHytte("bokser/lomskilt.html"); }, false);
    }

    //$("#venstrepil").addEventListener("mousedown", function () { bildegalleri(-1); }, false);
    //$("#hoyrepil").addEventListener("mousedown", function () { bildegalleri(1); }, false);
    $( "#hoyrepil" ).click(function() { bildegalleri(1);});
    $( "#venstrepil" ).click(function() { bildegalleri(-1);});

    

});

function showHytte(hytte) {
    $('#myModal').modal('show');
    $('#modalmobil').load(hytte);
}

//hoyrevenstre inneholder enten -1 eller +1;
function bildegalleri(hoyrevenstre) {
    var bilder = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg" ];
    bildecounter += hoyrevenstre;
    
    if(bildecounter >= bilder.length) {
        bildecounter = 1;
    } else if(bildecounter <= 0) {
        bildecounter = bilder.length;
    }
    $('#bildegalleri').attr("src", bilder[bildecounter]);
}

