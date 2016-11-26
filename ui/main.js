console.log('Loaded!');
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request = new XMLhttprequest();
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLhttprequest.DONE) {
             if(request.status === 200) {
                 alert('logged in sucessfully');
                 
             } else if (request.status === 403) {
                 alert('username/password incorrect');
             } else if (request.status === 500) {
                 alert('someting went worng on server');
                 
             }
             }
  
  };
var username=document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);

request.open('POST', 'http://http://ashwinm73.imad.hasura-app.io/login',true);
request.setrequestheader('content-type','application/json');
request.send(JSON.stringify({username:username,password:password}));
};