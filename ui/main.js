console.log('Loaded!');
var nameinput=document.getelementbyId('name');
var name=nameinput.value;
var submit=document.getelementbyId('submit');
submit.onclick=function(){
    var request = new xmlhttprequest();
    
    request.onreadystatechange=function(){
        if(request.readystate=== xmlhttprequest.DONE) {
            if(request.readystate===200) {
                
    
    var names = request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;names.length;i++){
        list +='<li>'+names[i]+'</li>';
    }
    var ul=document.getelementbyId('namelist');
    ul.innerHTML=list;
  }
  
  }
    
};

request.open('GET', 'http://http://ashwinm73.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};