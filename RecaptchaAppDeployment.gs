
// The doGet function accepts a recaptcha token from the client side 
// and performs a check with recaptcha's api and returns a boolean
function doGet (e) {
  var formData = {
    "secret": "{{Add Recaptcha Secret Key}}",
    "response": e,
  };
  const options = {
    method: 'post',
    payload: formData,
  };
  var url = "https://www.google.com/recaptcha/api/siteverify"
  var respObj = UrlFetchApp.fetch(url,options) 
  const data = JSON.parse(respObj.getContentText())
  
  return data.success
}