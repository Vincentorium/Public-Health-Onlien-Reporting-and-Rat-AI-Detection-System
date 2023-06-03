
   var indexCollection=[1,2,3]
  var noOfCom=0;




$(".header__report").click(function (e){
      $(".container,.switchBox,.filterBox--keyword").removeClass("containerHide");
      $(" .container--statistic,.comparedIconBox,.filterFormFirstFlood,.filterFormFirstSecond").addClass("containerHide");
      $(".filter_date_compare_box").remove()
  $(".container--map").css('visibility', 'hidden');
  
})

$(".header__statistic").click(function (e){
  $(".container--statistic,.comparedIconBox,.filterFormFirstFlood,.filterFormFirstSecond").removeClass("containerHide");
$(".container,.switchBox,.filterBox--keyword").addClass("containerHide");
  $(".container--map").css('visibility', 'hidden');
loadChart();
 

})


$(".header__Monitor").click(function (e){
  
$(".container--statistic,.comparedIconBox,.filterFormFirstFlood,.filterFormFirstSecond,.container,.switchBox,.filterBox--keyword").addClass("containerHide");

    $(".container--map").css('visibility', 'visible');
})
$(document).on("click",".comparedIcon",function(){
 if(jQuery.isEmptyObject(indexCollection)) {
   alert("Conditions are limited to 4")
   return true;
} 
  let index=indexCollection.pop()
 
content=' <div class="filter_date  filterBox filter_date_compare_box" >'
                  +' <div class="filter_date_compare_box--dateBox">'
                    +' <div class="filterBox filter_date_compare_box ">'
                      +' <input id="filter__formInput"'
            +' class="filter__formInput filter__formInput--date filter__formInput--date_s  filter__formInput_compare_--date_s  "'
            +' required="required" name="date_s_'+index+'"  type="date"  >'
                
                      +' </div>'
                    +' <div class="filterBox">'
                      +' <input id="filter__formInput" class="filter__formInput filter__formInput--date_e filter__formInput_compare_--date_e"'
            +'         required=" required" name="date_e_'+index+'" data-index='+index+' type="date"  >'
                   
                      +' </div>'

             +' <div class="filterBox">'
                    +' <select name="type_'+index+'" class="filter__formInput filter__formInput--type_'+index+' " type="text" '
                      +'required="required"  >'
                   
                
                      +' </select>'
                    +' <span class="fliter_placehoder"> </span>'
                    +' </div>'


                    +' <img class="comparedIconClose" data-index='+index+' src="./images/minus.png" alt="">'
                    +' </div>'
                  +' </div>'


$(".stat_filter_box").append(content)
 loadSelectionType(index)
 loadSelectionStreet(index) 
var count = $('#mainPageForm .filter_date_compare_box').length;
console.log(count)
});
 

 $(document).on("click",".comparedIconClose",function(){
   // indexCollection.push( $(this).prev().find(".filter__formInput").data("index"))
    indexCollection.push( $(this).data("index"))
   $(this).parent().parent().remove()
          
});
 



    $(document).ready(function(){
            $("#mainPageForm").on("submit", function(event){
          event.preventDefault();  
          let formData = $(this).serializeArray();
          getChartCompare(formData)

        });
})









function formDataToJSON(form){
let formData = $(form).serializeArray();
let jsonObject = {};
$.each(formData, function() {
  if (jsonObject[this.name] !== undefined) {
    if (!jsonObject[this.name].push) {
      jsonObject[this.name] = [jsonObject[this.name]];
    }
    jsonObject[this.name].push(this.value || '');
  } else {
    jsonObject[this.name] = this.value || '';
  }
});
let jsonString = JSON.stringify(jsonObject);

 return jsonString ;


  
}

 
$(document).on('change', '.filter__formInput--date_s', function() {
 
  var $startDateInput = $(this);
  var $endDateInput = $startDateInput.parent().next().find('input');
  var startDate = $startDateInput.val();
  var endDate = $endDateInput.val();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  var currentDate = tomorrow.toISOString().slice(0, 10);
  console.log(currentDate);  

 
  if (startDate > currentDate) {
    $startDateInput.val(currentDate);
    $endDateInput.val(currentDate);
    alert("Please select a date that is on or before today.")
    return true;
  }
 
  if (startDate > endDate) {
    $endDateInput.val(startDate);
  }

 
  if (endDate > currentDate) {
    $endDateInput.val(currentDate);
  }
});
 
$(document).on('change', '.filter__formInput--date_e', function() {
  var $endDateInput = $(this);
  var $startDateInput = $endDateInput.parent().prev().find('input');
  var endDate = $endDateInput.val();
  var startDate = $startDateInput.val();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  var currentDate = tomorrow.toISOString().slice(0, 10);
  console.log(currentDate); 

  if (endDate > currentDate) {
    $endDateInput.val(currentDate);
    alert("Please select a date that is on or before today.")
    return true;
  }

  
  if (endDate < startDate) {
    $startDateInput.val(endDate);
  }
});









function loadChart(){

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
 
month = month.toString().padStart(2, '0');
day = day.toString().padStart(2, '0');

 
let todayStr = `${day}/${month}/${year}`;
let todayStrSQL = `${year}-${month}-${day}`;
 
let lastWeek = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // 使用时间戳计算出7天前的日期
year = lastWeek.getFullYear();
month = lastWeek.getMonth() + 1;
day = lastWeek.getDate();

 
month = month.toString().padStart(2, '0');
day = day.toString().padStart(2, '0');

 
let lastWeekStr = `${day}/${month}/${year}`;
let lastWeekStrSQL = `${year}-${month}-${day}`;
$(".filter__formInput--date_s").val(lastWeekStrSQL)
$(".filter__formInput--date_e").val(todayStrSQL)
 getChartCompare([
{name: 'region', value: 'YMT'}

, 
{name: 'street', value: 'All Streets'}
, 
{name: 'date_s_0', value: lastWeekStrSQL}
, 
{name: 'date_e_0', value: todayStrSQL}

  ])
  }





  
$(document).on('change', '.mapDate', function() {

  
  var $startDateInput = $(this);
 
  var startDate = $startDateInput.val();
  
  var today = new Date();
  today.setDate(today.getDate());
  
  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  var currentDate = yesterday.toISOString().slice(0, 10);
  console.log(currentDate);  

 
  if (startDate >= currentDate) {
    $startDateInput.val(currentDate);
   
    alert("Please select a date that is before today.");
    return false;
  }
});
