var connections = [];

function reload(event) {
    window.location.reload()
}

function BoardController() {
    var jsPlumbInstance = null;
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 30 }],
            PaintStyle: { strokeStyle: '#87321b', lineWidth: 4 },
            EndpointStyle: { radius: 3, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#26c947" }
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (radius, divID, groupName, endPointName, anchorArray,color, stroke) {
        var Stroke;
        if(typeof(stroke)=='undefined'){
            Stroke = '#87321b';
        }
        else{
            Stroke = stroke;
        }
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: 1,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle:{ strokeStyle:Stroke, lineWidth: 4}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

}

var con;
function checkCircuit() {
    con = false;
    var g = new Graph(21);

  
    var groups = ['row1','row2','row3','row4','row5','row6','row7','row8','VCC','GND','c_A','c_B','ic_VCC','ic_D','ic_TH','ic_CV','ic_GND','ic_TR','ic_O','ic_R','r1_A','r1_B','r2_A','r2_B','led_A','led_C']
    
    console.log(groups.length)

    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }

   if(
       g.isConnected('VCC','c_A') && g.isConnected('c_B','ic_TR') && g.isConnected('ic_TR','r1_A') && g.isConnected('ic_TH','r1_A') && g.isConnected('r1_B','GND')
       && (g.isConnected('ic_VCC','VCC') && g.isConnected('ic_GND','GND')) && (g.isConnected('ic_R','VCC') 
       && g.isConnected('ic_O','r2_A') && g.isConnected('r2_B','led_A') && g.isConnected('led_C','GND'))
   )
   {
      
      alert("Right Connections")
      con = true;
      stopwatch();
      
   }else{
      alert("Wrong Connections")
   }
console.log("executed")
}

function stopwatch(){
    document.getElementById('watch').style.visibility ='visible';

   
  
        var seconds = 00; 
        var tens = 00; 
        var appendTens = document.getElementById("tens")
        var appendSeconds = document.getElementById("seconds")   
        var Interval ;
      
    
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        
        buttonStop.onclick = function() {
             
        }
              
        function startTimer () {
          tens++; 

          if(tens == 50 && seconds == 6){
            clearInterval(Interval);
            document.getElementById('led').style.backgroundImage = "url(images/led1.png)";
          }
          
          if(tens < 9){
            appendTens.innerHTML = "0" + tens;
          }
          
          if (tens > 9){
            appendTens.innerHTML = tens;
            
          } 
          
          if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML = seconds;
          }
        
        }

       
        
}
