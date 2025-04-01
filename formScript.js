function get_action(form) 
            {
                var v = grecaptcha.getResponse();
                if(v.length == 0)
                {
                    document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
                    return false;
                }
                else
                {
                    document.getElementById('captcha').innerHTML="Captcha completed";
                    return true; 
                }
            }
function register() {
                event.preventDefault()
                form = document.getElementById('sendForm');
                form.action = "{{Enter URL to google app script here}}"
                + "?firstName=" + form.firstName.value
                + "&lastName=" + form.lastName.value
                + "&email=" + form.email.value
                + "&message=" + form.message.value;
                form.submit();
            }