









 
// var locationsReport 
 $(document).ready(function () {
//(function () { 

    

  var mapLatitude=""
    var mapLongitude=""

var  locationsReport=[]
var mapDate="2023-04-25"
 

let mapOptions = {
    center:[22.3080583,114.1696833],
    zoom:50
}
var  map = new L.map('map' , mapOptions);


let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
getCameraPoint()
 function getCameraPoint( ){


let content=""


 
$.ajax({
        type:'POST',
        dataType: "json",
         
         async: false,
        url: './fyp/getCamera.php',
        success: function (result){

              
         

        $.each(result, function(index, data){
      

            
//location saved on 
 
locationsReport.push(
    {
        id: data.id,
        lat: data.y,
        long: data.x,
          name: data.name,
    } );

          
  
              });
            
 


 
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) { 
    $('#chartContainerLineTable').html("no record found")    
                           console.log(error);
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 


 


 

let popupOption = {
    "closeButton":false
}
 
 var markArr = [];
 
addMark(locationsReport,null)
function addMark(locations,icon){
locations.forEach(element => {
     var markerGroup=new L.Marker([element.lat,element.long],icon)
     markArr.push(markerGroup)
     map.addLayer(markerGroup)
    // new L.Marker([element.lat,element.long]).addTo(map)
    markerGroup.on("mouseover",event =>{
        event.target.bindPopup(
'<div class="card">'
//+'<img src="'+element.src+'" width="80" height="80" alt="'+element.title+'"> '
+'  <h3>'+element.name+'</h3>'
 

+'</div>',popupOption).openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        getCameraData( 0,element.id,mapDate)
    })
     .on("mouseon" , () => {
        window.open(element.url);
    })
});

}
//obtain the points
let marker = null;

map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

   
     mapLatitude =  event.latlng.lat;
      mapLongitude=   event.latlng.lng;
    
})

 
var marker2;

 



let customIcon={
    iconUrl:"images/mouseIcon.png",iconSize:[40,40]
}

let myIcon=L.icon(customIcon)
 
let iconOptions={icon:myIcon}


$(function(){
$('.mapMarkSearch').click(function(){

            $.each(markArr, function(index, value){
                map.removeLayer(value)
                
            });
            addMark(locationsMouse,iconOptions)
            
  
});

})
 
function getMapCamera(){

//if (map != undefined) { map.remove(); } 
 

let mapOptions = {
    center:[22.3080583,114.1696833],
    zoom:50
}

var map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
getCameraPoint()
 function getCameraPoint( ){


let content=""


 
$.ajax({
        type:'POST',
        dataType: "json",
         
         async: false,
        url: './fyp/getCamera.php',
        success: function (result){

              
         

        $.each(result, function(index, data){
      

            
//location saved on 
 
locationsReport.push(
    {
        id: data.id,
        lat: data.y,
        long: data.x,
          name: data.name,
    } );

          
  
              });
            
 


 
 
    
        },//EDF AJAX sucess FUNCTION
       
       error: function(xhr, status, error) { 
    $('#chartContainerLineTable').html("no record found")    
                           console.log(error);
      }

 
      
  });//EOF AJAX*/

}//EOF GETREPORTS FUNCTION
 


 


 

let popupOption = {
    "closeButton":false
}
 
 var markArr = [];
 
addMark(locationsReport,null)
function addMark(locations,icon){
locations.forEach(element => {
     var markerGroup=new L.Marker([element.lat,element.long],icon)
     markArr.push(markerGroup)
     map.addLayer(markerGroup)
    // new L.Marker([element.lat,element.long]).addTo(map)
    markerGroup.on("mouseover",event =>{
        event.target.bindPopup(
'<div class="card">'
//+'<img src="'+element.src+'" width="80" height="80" alt="'+element.title+'"> '
+'  <h3>'+element.name+'</h3>'
 

+'</div>',popupOption).openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        getCameraData( 0,element.id,mapDate)
    })
     .on("mouseon" , () => {
        window.open(element.url);
    })
});

}
//obtain the points
let marker = null;

map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

   
     mapLatitude =  event.latlng.lat;
      mapLongitude=   event.latlng.lng;
    
})

 
var marker2;

 



let customIcon={
    iconUrl:"images/mouseIcon.png",iconSize:[40,40]
}

let myIcon=L.icon(customIcon)
 
let iconOptions={icon:myIcon}


$(function(){
$('.mapMarkSearch').click(function(){

            $.each(markArr, function(index, value){
                map.removeLayer(value)
                
            });
            addMark(locationsMouse,iconOptions)
            
  
});

})

}

 
 $(document).on("change",".mapDate", function(e){
mapDate=date=$(this).val()
    getCameraData(1,1,mapDate)
    e.stopPropagation()
});

 $(document).on("change",".mapDate", function(e){
mapDate=date=$(this).val()
    getCameraData(1,1,mapDate)
    e.stopPropagation()
});
 $(document).on("click",".mapNewPoint", function(e){
  
    e.stopPropagation()
    let name =$(".namePoint").val()



    if(mapLatitude=="" || mapLongitude=="" )
{
    alert("please selet a new spot on map");
    return true;
}
     if(name=="" )
{
    alert("please enter a name for new point");
    return true;
}
    
        $.ajax({
          url: "./php/inserCamera.php",
          dataType: "json",
          type: 'POST',
          data: {

             mapLatitude:mapLatitude,
                mapLongitude:mapLongitude,
                name:name,
          },
          success: function (rs) {
            alert("Update Successfully!")
         
           
    }
        })

});

}) 
