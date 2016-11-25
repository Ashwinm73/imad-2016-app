console.log('Loaded!');
var nameinput=document.getelementbyId('name');
var name=nameinput.value;
var submit=document.getelementbyId('submit');
submit.onclick=function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;names.length;i++){
        list +='<li>'+names[i]+'</li>';
    }
    var ul=document.getelementbyId('namelist');
    ul.innerHTML=list;
    
};