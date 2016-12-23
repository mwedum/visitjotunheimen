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
    
    var fossheim = svgDoc.getElementById("fossheim");
    //var a = svgDoc.getElementById("");
    
    fossheim.addEventListener("mousedown", function () {
                    console.log("Fosshaaaim");
                }, false);
                      
});

function clickHandler() {
    console.log("Klikk");
}
/*
<g class="clickme" id="" type="image/svg+xml">		

*/