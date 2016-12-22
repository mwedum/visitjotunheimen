var width = $( document ).width();
    console.log("Document -" + width);
    console.log("Window - " + $( window ).width());
    
    var svg = document.getElementById("svgFile"); 
    
    
    if(width < 1024) {
        svg.setAttribute("data", "Mobil_vinterkampanje.svg");
    } else {
        svg.setAttribute("data", "Vinterkampanje.svg");
    }
    
$(window).on('load', function() {
    
    
    var svgDoc;
    var fossheim;
        
    console.log("SetAttribute done");
        
    svgDoc = svg.contentDocument;
    fossheim = svgDoc.getElementById("sognefjellshytta1");
    console.log(fossheim);
    
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