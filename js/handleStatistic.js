
   var indexCollection=[1,2,3]
  var noOfCom=0;
$(document).on("click",".comparedIcon",function(){
  let index=indexCollection.pop()
 
content=' <div class="filter_date filter_date_compare_box filterBox " >'
                  +' <div class="filter_date_compare_box--dateBox">'
                    +' <div class="filterBox   ">'
                      +' <input id="filter__formInput"'
            +' class="filter__formInput filter__formInput--date filter__formInput_compare_--date_s test_t"'
            +' required="required" name="date_s_'+index+'"  type="text" onfocus="(this.type=\'date\')"'
            +' onblur="if(!this.value)this.type=\'text\'    ">'
                      +' <span class="fliter_placehoder">Start Date</span>'
                      +' </div>'
                    +' <div class="filterBox">'
                      +' <input id="filter__formInput" class="filter__formInput filter__formInput_compare_--date_e'
            +'         required=" required" name="date_e_'+index+'" data-index='+index+' type="text" onfocus="(this.type=\'date\')"'
            +' onblur="if(!this.value)this.type=\'text\' ">'
                      +' <span class="fliter_placehoder">End Date</span>'
                      +' </div>'
                    +' <img class="comparedIconClose" src="./images/minus.png" alt="">'
                    +' </div>'
                  +' </div>'


$(".stat_filter_box").append(content)

var count = $('#mainPageForm .filter_date_compare_box').length;
console.log(count)
});
 

 $(document).on("click",".comparedIconClose",function(){
  indexCollection.push( $(this).prev().find(".filter__formInput").data("index"))
  $(this).parent().parent().remove()
          
});
 



    $(document).ready(function(){
            $("#mainPageForm").on("submit", function(event){
                event.preventDefault();  

          getChartCompare(formDataToJSON(this))

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