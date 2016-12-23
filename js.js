var width = $( document ).width();
    console.log("Document -" + width);
    console.log("Window - " + $( window ).width());
    
    var svg = document.getElementById("svgFile"); 
    
    svg.setAttribute("data", "Mobil_vinterkampanje.svg");
   /* if(width < 1024) {
        svg.setAttribute("data", "Mobil_vinterkampanje.svg");
    } else {
        svg.setAttribute("data", "Vinterkampanje.svg");
    }*/

$(window).on('load', function() {
    
    var svgDoc = svg.contentDocument;
    //$('#fossheim').load("bokser/fossheim.html" );

    var fossheim = svgDoc.getElementById("fossheim");
    var juvass = svgDoc.getElementById("juvasshytta");
   // var  = svgDoc.getElementById("");
    
    fossheim.addEventListener("mousedown", function () {
        $('#myModal').modal('show');
        $('#modalmobil').load("bokser/fossheim.html" );
        console.log(this);
        }, false);
        
    juvass.addEventListener("mousedown", function () {
        console.log(this);
        $('#myModal').modal('show');
        $('#modalmobil').load("bokser/juvasshytta.html" );
        }, false);
                
    $(fossheim).mouseover(function(){
        
    });
    
    $(fossheim).mouseout(function(){
        $('#test').hide();
    });
                      
});
