// document.getElementById("gym-select").addEventListener("change", function () {
//   console.log("You selected: ", this.value);
// });
// $(document).ready(function(){
//     $('.gym-select').click(function(){
//         var userGym = $(".gym-select").val();
//         //   Note the url below. It adds catid=(#categoryBox value from above).
//         $.ajax({
//             type:'GET',
//             url:'/test?catid=' + catID,
//             dataType:'json',
//             success: function(data){
//                 $('#games').empty();
//                 for (var i = 0; i < data.length; i++){
//                     $('#games').append('<option>'+data[i].gamename+'</option>')
//                 }
//             }
//         });
//     });
// });

var userSelect = document.getElementById("gym-select");
var userGym = userSelect.options[userSelect.selectedIndex].value;