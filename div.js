function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState== 4 && this.status == 200){
            var d = JSON.parse(this.responseText);
          loopData(d);}
          else if (this.readyState ==4 && this.status ==404){
           document.querySelector("#err").innerHTML = "stm went wrong!"
          }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/posts")
     xhttp.send();
}

loadData();
function loopData(d){
for(var i =0; i <d.length ;i++)
{
    document.querySelector("#data").innerHTML += d[i].title + "<br>";
}
}
//objects
var persons = [
    {id:1 , name: 'yasser', age:15 },
    {id:2 , name: 'tarekk', age:18 },
    {id:3 , name: 'mohammed', age:17},
    {id:4 , name: 'mahmoud', age:19 },

]

    var searchbtn = document.querySelector("#search");
    var input = document.querySelector("#num");
    var res = document.querySelector("#res");
    searchbtn.addEventListener("click",search);

    function search(){
        var val=input.value;
    var r = persons.find((per) => per.id ==val);
    res.innerHTML= r.name;
}

    
