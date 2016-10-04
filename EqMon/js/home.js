'use strict';
var i = 0;
app.home = kendo.observable({
    lViewData: [1, ],
    onShow: function( ) {
            i++;
            ajaxOptions.url = "http://99-41-92-21.lightspeed.rcsntx.sbcglobal.net:8082/ingress/a" + i;
            //ajaxOptions.url = "http://192.168.1.174:8082/ingress/a" + i;
            $.ajax(ajaxOptions);  //On success of this call the upDatePage function will fire...
    },
    afterShow: function( ) {
      //console.log("after show fired");

    },
    cancel: function( ) {
      //console.log("cancelled")
    },
    goToMap: function( title, coordinates ){
      console.log( title );
      console.log( coordinates );
      app.prms     = coordinates.split( " " );
      app.mapTitle = title;
      app.mobileApp.navigate( "views/map.view.html" );
    }
});

var updatePage = function( resp ) {
  //console.log("updatePage fired");
  if(resp){
    //console.log(resp);

    app.home.lViewData = resp.myRoot.row;
    kendo.bind( '#homeModel', app.home );


    var tmpl = $("#listBoxTemplate").html();
    //var ctrl = $('#eqListView').kendoMobileListView({dataSource:app.home.lViewData, template: '<a onclick="app.home.goToMap(\'${Title[0]}\',\'${GeorssPoint[0]}\')">${Title[0]}</a><br>${Updated[0]}'});
     var ctrl = $('#eqListView').kendoMobileListView({dataSource:app.home.lViewData, template: tmpl});
  }
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


$(function( ){
  
  //console.log( app.opSystem );
})
