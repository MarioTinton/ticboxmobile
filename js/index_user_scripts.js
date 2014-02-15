(function()
{
 "use strict";
    
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
        $(".uib_w_4").click(function(e)
        {
        var sEmail = $(".uib_w_2 input").val();
        if ($.trim(sEmail).length === 0) {
            $(".loginmessage").val('Please enter valid email address');
            return false;
        }
        if (validateEmail(sEmail)) {
            return true;
        }
        else {
            alert('Invalid Email Address');
            return false;
        }
        });
}
 $(document).ready(register_event_handlers);
})();
