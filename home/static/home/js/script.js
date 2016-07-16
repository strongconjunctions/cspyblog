/*window.onload = (function() {
    var flashElement = document.querySelector('.search-field');


        function intervId() {
            setInterval(flashField, 1000);
        }

        function flash_under() {
 
            if (flashElement.style.width == "154px") {
                stopFlashing();
                console.log('stop');
            } else {
                //intervId();
            }

        }

     
        function flashField() {
          flashElement.style.opacity = flashElement.style.opacity == 1 ? 0 : 1;
        }
     
        function stopFlashing() {
          clearInterval(intervId);
        }
       

        return flash_under();
}());
*/


$(document).ready(function() {

    var flashId = $('.search-field');
    var flashIdFoc = $('.search-field:focus');


    function intervId() {
        setInterval(flashField, 1000);
    }


    function flash_under() {

        if (flashIdFoc) {
            stopFlashing();
            flashId.css('color', 'red');
            console.log('stop');
        } else {
            intervId();
        }

    }


    function flashField() {
        if (flashId.css('opacity') == 1) {
            flashId.css('opacity', 0);
        } else if (flashId.css('opacity') == 0) {
            flashId.css('opacity', 1);
        }
    }
 
    function stopFlashing() {
        clearInterval(intervId);
    }
   

    return flash_under();

});