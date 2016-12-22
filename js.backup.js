console.log("Hello there");
            $(window).on('load', function() {
                //alert("Document loaded, including graphics and embedded documents (like SVG)");
                var a = document.getElementById("svgFile");                
                var svgDoc = a.contentDocument;
				
                var gris = svgDoc.getElementById("gris");
				var skigaer = svgDoc.getElementById("skigaer");
                var polse = svgDoc.getElementById("polse");

				//$(polse).attr('transform', 'translate(' + px + ', 0)');
				
                gris.addEventListener("mousedown", function () {
                    
                    var isVisible = $('#divdivdiv').is(':visible');
                    if(isVisible) {
                        console.log("Hide");
                          $("#divdivdiv").hide();
                    } else {
                        console.log("show");
                        $("#divdivdiv").show();
                    }
                }, false);
                /////////////////////////////////////////////////////
                 /////////////////////////////////////////////////////

                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];

                skigaer.addEventListener("mousedown", function () {
                    console.log("skigaer");
                    $('#myModal').modal('show')
                }, false);
                
                span.onclick = function() {
                    modal.style.display = "none";
                }
                
				
                polse.addEventListener("mousedown", function () {
					var isVisible = $('#footer').is(':visible');
                    if(isVisible) {
                        $("#footer").hide();
                    } else {
                        $("#footer").show();
                    }
                    
                }, false);
                                
            });
            
            function withVelocity() {
                    $("#divdivdiv").velocity({
                      left: "500px",
                    }, {
                      duration: 3000, 
                      easing: "linear"
                    } );  
                  }
                  