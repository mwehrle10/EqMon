'use strict';
app.map = kendo.observable({
    lViewData: [1, ],
    onShow: function( ) {
            //ajaxOptions.url = "http://99-41-92-21.lightspeed.rcsntx.sbcglobal.net:8082/ingress/a" + i;
            //ajaxOptions.url = "http://192.168.1.174:8082/ingress/a" + i;
            //$.ajax(ajaxOptions);  //On success of this call the upDatePage function will fire...
            app.map.createMap();
            console.log("map onShow fired");

    },
    afterShow: function( ) {
      //console.log( "map after show fired" );

    },
    cancel: function( ) {
      //console.log( "map cancelled" )
    },
    goToIndexPage: function( ){
       app.mobileApp.navigate( "views/index.view.html" );
    },
    createMap: function() {
     console.log( "inside create map" );
      $("#map").kendoMap({
          center: app.prms,
          //center: [32.9424811,-96.8201324],
          zoom: 16,
          layers: [{
              type: "tile",
              urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
              /* urlTemplate: "https://maps.google.com/?q=45.424807,-75.699234", */
              subdomains: ["a", "b", "c"],
              attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>"
              /* attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>" */
          }],
          markers: [{
              location: app.prms,
              //location: [32.9424811,-96.8201324],
              shape: "pinTarget",
              tooltip: {
                 position: "center",
                  content: app.mapTitle
              }
          }],
          zoomEnd: function(e) {
            console.log("zoom end @ " + e.sender.zoom());
        }
        });
    }
});

var updatePage = function( resp ) {
  //console.log("updatePage fired");
  //if(resp){
    //console.log(resp);

    //app.map.lViewData = resp.myRoot.row;
    //kendo.bind('#homeModel', app.map);
    
  //}
};

// ... the AJAX request fails
var printError = function( req, status, err ) {
  console.log( 'something went wrong: ', status, err );
};

var ajaxOptions = {
  url: "http://99-41-92-21.lightspeed.rcsntx.sbcglobal.net:8082/ingress/a",
  dataType: 'json',
  success: updatePage,
  error: printError
};


$(function(){
//put any preprocessing stuff here-
console.log("map.js ready");
kendo.bind('#mapModel', app.map);
})
