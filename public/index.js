const inputs = document.querySelector(".input")
        const searchs = document.querySelector(".search");
        const day = document.querySelector(".day");
           const date = document.querySelector(".date");
const citynames = document.querySelector(".cityname");
const result = document.querySelector(".result");
const temp = document.querySelector(".temp");
const tempstatus = document.querySelector(".temp_status");
const datahide = document.querySelector(".slayer");
const fun = async()=>{
let cityVal = inputs.value;


if(inputs===" "){
    citynames.innerText = `please enter your city name `;
    datahide.classList.add('hide_data')

}else{
    try{
    let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a01ac50ffcbc4f6ee8bdd2985742502a`;
    const response =  await fetch(url);
    const data = await response.json();
   
    const arrdata = [data];
    // console.log(arrdata[0]);
    citynames.innerHTML = `${arrdata[0].name},${arrdata[0].sys.country}`
    result.innerHTML= arrdata[0].main.temp;
    tempstatus.innerHTML=arrdata[0].weather[0].main;
let tempmode = arrdata[0].weather[0].main;

    // condition to check sunny or clouds 
if(tempmode=="Clear"){
    tempstatus.innerHTML = "<i class='fas fa-cloud-sun style = 'color :danger;'></i>";
} else if(tempmode=="Clouds"){
    tempstatus.innerHTML = "<i class='fas fa-cloud' style = 'color : #f1f2f6;'></i>";
}else if(tempmode=="Rain"){
    tempstatus.innerHTML = "<i class='fas fa-cloud-rain' style = 'color :  #a4b0be;'></i>";
}else{
    
        tempstatus.innerHTML = "<i class='fas fa-sun' style : 'color:#f1f2f6;'></i>";
       
    
}
datahide.classList.remove('hide_data');

}catch{
        citynames.innerText = `please enter your city name  properly`
        datahide.classList.add('hide_data');
    }
}


}




        searchs.addEventListener('click',fun)