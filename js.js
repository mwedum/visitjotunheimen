var width = $( document ).width();
    console.log("Document -" + width);
    console.log("Window - " + $( window ).width());
    
    var svg = document.getElementById("svgFile"); 
    
        svg.setAttribute("data", "Vinterkampanje.svg");
   /* if(width < 1024) {
        svg.setAttribute("data", "Mobil_vinterkampanje.svg");
    } else {
        svg.setAttribute("data", "Vinterkampanje.svg");
    }*/

$(window).on('load', function() {
    
    var svgDoc = svg.contentDocument;
    //$('#fossheim').load("bokser/fossheim.html" );

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

});

function showHytte(hytte) {
    $('#myModal').modal('show');
    $('#modalmobil').load(hytte);
}
