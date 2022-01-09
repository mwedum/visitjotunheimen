//Lenke nederst til venstre

var bildecounter = 1;
var bildecounterp = 1;
$(window).on("load", function() {
    
        setCSS();
        addEventListeners();  
    
        $( window ).resize(function() {
            setCSS();
        });
    });


function addEventListeners() {
        var svg = document.getElementById("svgFile"); 
        var svgDoc = svg.contentDocument;
        var hogruta = svgDoc.getElementById("hogruta");
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
        var sotaseter = svgDoc.getElementById("sota_seter");
        var gjendesheim = svgDoc.getElementById("gjendesheim");
        var krossbu = svgDoc.getElementById("krosbu");
        var sognefjellshytta2;
        var surtningt = svgDoc.getElementById("surtningt");
        var surtning = svgDoc.getElementById("surtning");
        var hog1 = svgDoc.getElementById("hog1");
        var hog2 = svgDoc.getElementById("hog2");
        var bess1 = svgDoc.getElementById("bess1");
        var bess2 = svgDoc.getElementById("bess2");
        var glitter1 = svgDoc.getElementById("glitter1");
        var glitter2 = svgDoc.getElementById("glitter2");
        var gal1 = svgDoc.getElementById("gal1");
        var gal2 = svgDoc.getElementById("gal2");
        var stor1 = svgDoc.getElementById("store1");
        var stor2 = svgDoc.getElementById("store2");
        var skilt = svgDoc.getElementById("skilt");
        var turtagro = svgDoc.getElementById("turtagro");
        var sporten = svgDoc.getElementById("sporten");
        var storhaugen = svgDoc.getElementById("storhaugen");
        var boverdalenvandrerhjem = svgDoc.getElementById("boverdalenvandrerhjem");
        var brimibue = svgDoc.getElementById("fjellogfritid-5");
        var hurrungane = svgDoc.getElementById("hurrungane");
        hurrungane.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        var guide1 = svgDoc.getElementById("guide1");
        var guide2 = svgDoc.getElementById("guide2");
        var guide3 = svgDoc.getElementById("guide3");
        var guide4 = svgDoc.getElementById("guide4");
        var guide5 = svgDoc.getElementById("guide5");
        var guide6 = svgDoc.getElementById("guide6");
        var guide7_1 = svgDoc.getElementById("tspan6995");
        var guide7 = svgDoc.getElementById("polyline2184");
        var naturopplevingar = svgDoc.getElementById("naturopplevingar");


        var h1 = svgDoc.getElementById("hvit1");
        var h2 = svgDoc.getElementById("hvit2");
        var h3 = svgDoc.getElementById("hvit3");
        var h4 = svgDoc.getElementById("hvit4");
        var h5 = svgDoc.getElementById("hvit5");
        var h6 = svgDoc.getElementById("hvit6");
        var h7 = svgDoc.getElementById("hvit7");
        var h8 = svgDoc.getElementById("hvit8");
        var h9 = svgDoc.getElementById("hvit9");
        var h10 = svgDoc.getElementById("hvit10");
        var h11 = svgDoc.getElementById("hvit11");
        var h12 = svgDoc.getElementById("hvit12");
        var h13 = svgDoc.getElementById("hvit13");
        var h14 = svgDoc.getElementById("hvit14");

        h1.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h2.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h3.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h4.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h5.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h6.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h7.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h8.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h9.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h10.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h11.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h12.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h13.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);
        h14.addEventListener("mousedown", function () { showHytte("bokser/hvitlinje.html"); }, false);


        var r0 = svgDoc.getElementById("rod0");
        var r1 = svgDoc.getElementById("rod1");
        var r2 = svgDoc.getElementById("rod2");
        var r3 = svgDoc.getElementById("rod3");
        var r4 = svgDoc.getElementById("rod4");
        var r5 = svgDoc.getElementById("rod5");
        var r6 = svgDoc.getElementById("rod6");
        var r7 = svgDoc.getElementById("rod7");
        var r8 = svgDoc.getElementById("rod8");
        var r9 = svgDoc.getElementById("rod9");
        var r10 = svgDoc.getElementById("rod10");
        var r11 = svgDoc.getElementById("rod11");
        var r12 = svgDoc.getElementById("rod12");
        var r13 = svgDoc.getElementById("rod13");
        var r14 = svgDoc.getElementById("rod14");
        var r15 = svgDoc.getElementById("rod15");
        var r16 = svgDoc.getElementById("polyline3520");

        r0.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r1.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r2.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r3.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r4.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r5.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r6.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r7.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r8.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r9.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r10.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r11.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r12.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r13.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r14.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r15.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        r16.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);

        stor1.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);
        stor2.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);

        glitter1.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);
        glitter2.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);
        gal1.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);
        gal2.addEventListener("mousedown", function () { showHytte("bokser/rodlinje.html"); }, false);

        surtningt.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        surtning.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        hogruta.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        hog1.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        hog2.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        bess1.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);
        bess2.addEventListener("mousedown", function () { showHytte("bokser/hogruta.html"); }, false);

        guide1.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide2.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide3.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide4.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide5.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide6.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide7.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        guide7_1.addEventListener("mousedown", function () { showHytte("bokser/guide.html"); }, false);
        //fossheim.addEventListener("mousedown", function () { showHytte("bokser/fossheim.html"); }, false);
        nordal.addEventListener("mousedown", function () { showHytte("bokser/nordal.html"); }, false);
        fossberg.addEventListener("mousedown", function () { showHytte("bokser/fossberg.html"); }, false);
        fjellogfritid.addEventListener("mousedown", function () { showHytte("bokser/fjellogfritid.html"); }, false);
        roisheim.addEventListener("mousedown", function () { showHytte("bokser/roisheim.html"); }, false);
        //raubergstulen.addEventListener("mousedown", function () { showHytte("bokser/raubergstulen.html"); }, false);
        spiterstulen.addEventListener("mousedown", function () { showHytte("bokser/spiterstulen.html"); }, false);
        juvass.addEventListener("mousedown", function () { showHytte("bokser/juvasshytta.html"); }, false);                   
        jotunheimenfjellstue.addEventListener("mousedown", function () { showHytte("bokser/jotunheimenfjellstue.html"); }, false);
        bessheim.addEventListener("mousedown", function () { showHytte("bokser/bessheim.html"); }, false);
        //leirvassbu.addEventListener("mousedown", function () { showHytte("bokser/leirvassbu.html"); }, false);
        //glitterheim.addEventListener("mousedown", function () { showHytte("bokser/glitterheim.html"); }, false);
        sognefjellshytta1.addEventListener("mousedown", function () { showHytte("bokser/sognefjellshytta.html"); }, false);
        memurbu.addEventListener("mousedown", function () { showHytte("bokser/memurbu.html"); }, false);
        gjendesheim.addEventListener("mousedown", function () { showHytte("bokser/gjendesheim.html"); }, false);
        krossbu.addEventListener("mousedown", function () { showHytte("bokser/krossbu.html"); }, false);
        sporten.addEventListener("mousedown", function () { showHytte("bokser/sporten.html"); }, false);
        //storhaugen.addEventListener("mousedown", function () { showHytte("bokser/Storhaugen.html"); }, false);
        boverdalenvandrerhjem.addEventListener("mousedown", function () { showHytte("bokser/boverdalenvandrerhjem.html"); }, false);
        //brimibue.addEventListener("mousedown", function () { showHytte("bokser/brimibue.html"); }, false);
        naturopplevingar.addEventListener("mousedown", function () { showHytte("bokser/naturopplevingar.html"); }, false);
        sotaseter.addEventListener("mousedown", function () { showHytte("bokser/sotaseter.html"); }, false);

        //turtagro.addEventListener("mousedown", function () { showHytte("bokser/turtagro.html"); }, false);
        skilt.addEventListener("mousedown", function () { showHytte("bokser/lomskilt.html"); }, false);

        $( "#hoyrepil" ).click(function() { bildegalleri(1);});
        $( "#venstrepil" ).click(function() { bildegalleri(-1);});
}
function setCSS() {
    var svg = document.getElementById("svgFile"); 
    var width = $(window).width();
    console.log(width);
    var factor = 0.102339181;
    var midtskille;
    var mobile = false;
    var guidatur = width * 0.17;
    
    $("#topptekst").css('margin-left', width/11.54 +"px" );
    $(".input-plassering").css('margin-top',guidatur +"px" );
    $(".finndintur").css('margin',"auto" );
    $(".finndintur").css('margin-top', width * 0.107942265 +"px" );
        
    if(width < 1024) 
    { 
        midtskille = width*1.63818713;
        $("h1").css('font-size',"50pt" );
        $(".mellomtittel").css('font-size',"25pt" );
        $(".opp").css('margin',"auto" );
        $(".n0").css('width',"75%" );
        $(".finndintur").css('margin-top', width * 0.05042265 +"px" );
        $(".halvbilde").css('width',"300px" );
        $(".bildegalleri").css('height',"300px" );
        $("h2").css('margin-top',"30px" );
        $(".miniseksjon").css('margin-top',"35px" );
        $("h2").css('margin-bottom',"15px");
        $(".desktop-only").css("display", "none");
    } 
    else  
    {
        midtskille = (width+30)*1.60818713;
        $(".n0").css('width',"60%" );
        $("#navn0").css('margin-top', "-" + width * 0.148+"px");
        $("#navn1").css('margin-top', "-" + width * 0.158+"px");
        $("#navn2").css('margin-top', "-" + width * 0.17903849+"px");
        $("#navn3").css('margin-top', "-" + width * 0.17903849+"px");
        $("#navn4").css('margin-top', "-" + width * 0.17903849+"px");
        $("#navn5").css('margin-top', "-" + width * 0.17903849+"px");
        $("#navn6").css('margin-top', "-" + width * 0.17903849+"px");
        $("#navn7").css('margin-top', "-" + width * 0.17903849+"px");
        $(".desktop-only").css("display", "inline");
        
    }
    
    if(width > 1450) 
    {
        $("p, input").css('font-size',"20pt" );
        $("h2").css('font-size',"70pt" );
        $("h1").css('font-size',"90pt" );
        
        $(".opp").css('margin',"40px 0 60px 0" );
        $("h2").css('margin-top',"60px" );
        $("h2").css('margin-bottom',"40px");
        $(".nytt-input-send").css('height',"65px");        
        if(width > 1850) 
        {
            $("p, input").css('font-size',"24.5pt" );
            $("h2").css('font-size',"80pt" );
            $("h1").css('font-size',"100pt" );
            $("h2").css('margin-top',"70px" );
            $("h2").css('margin-bottom',"50px");
        }
    }
    else if(width <= 1450 && width > 1150) {
        $("p,input").css('font-size',"16.5pt" );
        $("h1").css('font-size',"75pt" );
        $("h2").css('font-size',"50pt" );
    }
    else if(width <= 1150 && width >= 920) {
        $("p,input").css('font-size',"14pt" );
        $("h1").css('font-size',"60pt" );
        $("h2").css('font-size',"40pt" );
    }
    else if(width < 920 && width > 820) 
    {
        $("p,input").css('font-size',"13pt" );
        $("h1").css('font-size',"35pt" );
        $("h2").css('font-size',"27pt" );
        $(".mellomtittel").css('font-size',"20pt" );
    } 
    else if(width < 820) 
    {
        $("p,input").css('font-size',"11.5pt" );
        $(".opp").css('font-size',"13.5pt" );
        $(".n0").css('width',"95%" );
        $("h1").css('font-size',"30pt" );
        $("h2").css('font-size',"22pt" );
        $(".mellomtittel").css('font-size',"18pt" );
        $(".nytt-input").css("min-width","200px");
        $(".halvbilde").css("width","30%");
        $(".nytt-input").css("margin-bottom","10px");
        $(".nytt-input-send").css("height","30px");
        $("#wrapper").css("width", "55")
        if(width < 700) 
        {
            $("p,input").css('font-size',"10.5pt" );
            $("margin").css('margin',"0 0 0 0" );
        }
    }
    
    var start = width * factor;
    $(".topp").css('top',start + "px");
    $(".midtskille").css('height', midtskille + "px");
    
    var n1height;
    //Nytt fra fjellet
    n1height = width * 0.32602;
    $(".n1").css('top', midtskille+"px");
    $(".n1").css('height', n1height+"px");
    
    
    //Samarbeidspart
    //501px 1468 width KORREKT
    var top = midtskille + n1height;
    var n2height = width * 0.3662;
    $(".n2").css('top', top+"px");
    $(".n2").css('height', n2height+"px");
    
    //Guida turer
    top += n2height;
    var n3height = width * 0.595;
    $(".n3").css('top', top+"px");
    $(".n3").css('height', n3height+"px");
    
    //Turbeskrivingar
    top += n3height;
    var n4height = width * 0.62;
    $(".n4").css('top', top+"px");
    $(".n4").css('height', n4height+"px");
    
    top += n4height;
    var n5height = width * 0.605;
    $(".n5").css('top', top+"px");
    $(".n5").css('height', n5height+"px");
    
    
    top += n5height;
    var n6height = width * 0.368;
    mobile = true;
    if(mobile == true) { top -= 60;}
    $(".n6").css('top', top+"px");
    $(".n6").css('height', n6height+"px");
    if(mobile == true) { top += 80;}
    mobile = false;
    
    top += n6height;
    var n7height = width * 0.45;
    $(".n7").css('top', top+"px");
    $(".n7").css('height', n7height+"px");
    
    top += n7height;
    var n8height = width * 0.4861;
    $(".n8").css('top', top+"px");
    $(".n8").css('height', n8height+"px");
}
function showHytte(hytte) {
    $('#myModal').modal('show');
    $('#modalmobil').load(hytte);
    $('#modalmobil').animate({ 'zoom': 1.4}, 400);

}

//Since HTML boxes are loaded on demand, this has to be done for SEO purposes. 
function loadHTMLSEO() {
    $('#seo').append($('<div>').load("bokser/glitterheim.html"));
    $('#seo').append($('<div>').load("bokser/bessheim.html"));
    $('#seo').append($('<div>').load("bokser/fjellogfritid.html"));
    $('#seo').append($('<div>').load("bokser/fossberg.html"));
    $('#seo').append($('<div>').load("bokser/fossheim.html"));
    $('#seo').append($('<div>').load("bokser/gjendesheim.html"));
    $('#seo').append($('<div>').load("bokser/hogruta.html"));
    $('#seo').append($('<div>').load("bokser/jotunheimenfjellstue.html"));
    $('#seo').append($('<div>').load("bokser/juvasshytta.html"));
    $('#seo').append($('<div>').load("bokser/krossbu.html"));
    $('#seo').append($('<div>').load("bokser/leirvassbu.html"));
    $('#seo').append($('<div>').load("bokser/lomskilt.html"));
    $('#seo').append($('<div>').load("bokser/memurbu.html"));
    $('#seo').append($('<div>').load("bokser/nordal.html"));
    $('#seo').append($('<div>').load("bokser/raubergstulen.html"));
    $('#seo').append($('<div>').load("bokser/roisheim.html"));
    $('#seo').append($('<div>').load("bokser/sognefjellshytta.html"));
    $('#seo').append($('<div>').load("bokser/spiterstulen.html"));
    $('#seo').append($('<div>').load("bokser/turtagro.html"));

    //$('#seo').append(load("bokser/hogruta.html")
}

//hoyrevenstre inneholder enten -1 eller +1;
function bildegalleri(hoyrevenstre) {
    bildecounter += hoyrevenstre;
    
    if(bildecounter >= 16) {
        bildecounter = 1;
    } else if(bildecounter <= 0) {
        bildecounter = 16;
    }
    $('#bildegalleri').attr("src", "img/" + bildecounter + ".jpg");
}

function bildegalleripartner(hoyrevenstre) {
    var bilder = ["logoer/vpg.jpg","logoer/fjellogfritid.png","logoer/dnt.png"];
    bildecounterp += hoyrevenstre;

    
    if(bildecounterp > bilder.length) {
        bildecounterp = 0;
    } else if(bildecounterp < 0) {
        bildecounterp = bilder.length;
    }
    
    $('#bildegalleripartner').attr("src", bilder[bildecounterp]);
}

function finnmintur() {
    var y = $( window ).width() * 0.35;  //your current y position on the page
   $('html, body').animate({scrollTop: '+='+y+'px'}, 800);

}

