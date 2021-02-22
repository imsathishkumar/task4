var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    let lowpopulation=  data.filter((data)=>{

        return data.population<20000
})
for(i=0;i<27;i++){
    console.log(lowpopulation[i].population);
}
}