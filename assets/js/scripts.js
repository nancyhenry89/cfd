const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$(document).ready(function(){
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    $('.date').text(  monthNames[month] + ", " +day + " "  + year + "")
    $('.popup-title').click(function() {
        $(this).siblings('.popup-cont').fadeIn();
    });
    $('.close').click(function() {
        $(this).parents('.popup-cont').fadeOut();
    });
});
