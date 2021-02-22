var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code=='USD')
         console.log(data[i].name);
    }
}