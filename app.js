function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name")
    let img =  document.getElementById("img")
    let region = document.getElementById("region")
    let capitalCity = document.getElementById("capitalCity")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = obj.name.official;
            name.innerText = obj.name.common;
            region.innerText=obj.region;
            capitalCity.innerText=obj.capital;
        
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);
    
    })

}