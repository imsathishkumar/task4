var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    var population= ((pop)=>{
        return pop.reduce((a,b)=>a+b);
    })
    var arr=[];
    for(i=0;i<data.length;i++){
        arr[i] = data[i].population;
    }
    
    console.log(population(arr));

}