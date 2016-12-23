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
    
    var mouseX;
    var mouseY;
   /* $(document).mousemove( function(e) {
       mouseX = e.pageX; 
       mouseY = e.pageY;
       console.log("Muser");
    });*/

$(window).on('load', function() {
    
    var svgDoc = svg.contentDocument;
    $('#fossheim').load("bokser/fossheim.html" );
   
    var fossheim = svgDoc.getElementById("fossheim");
    console.log(fossheim);
    
    fossheim.addEventListener("mousedown", function () {
        $('#fossheim').hide();
            document.onmousemove = function(e){
                mouseX = e.pageX;
                mouseY = e.pageY;
            }

            $('#test').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
            console.log("X - " + mouseX);
            console.log("Y - " + mouseY);
        }, false);
                
    $(fossheim).mouseover(function(){
        
    });
    
    $(fossheim).mouseout(function(){
        $('#test').hide();
    });
                      
});
