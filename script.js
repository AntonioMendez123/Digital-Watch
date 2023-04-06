setInterval(() =>{
    var clock = document.getElementsByClassName("clock")[0];
  
    var time = new Date();
    var hour = time.getHours();
    var AmorPm = hour >= 12 ? 'PM' : 'AM';
    hour=(hour % 12)|| 12;
    var minute = time.getMinutes();
    var second = time.getSeconds();
   
   
    if (minute < 10){
        minute = "0" + minute
    }
    if (second < 10){
        second = "0" + second
    }
    if (hour < 10){
        hour = "0" + hour
    }
    clock.innerHTML = hour + ":"+ minute +":"+ second +" " + AmorPm;
   

},1000);
setInterval(() =>{
    var day = document.getElementsByClassName("day")[0];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    var time = new Date();
    
    var right = weekday[time.getDay()];
    
    var month = months[time.getMonth()];
    var year = time.getFullYear();
   
   
  
    day.innerHTML = right + ", " +  month +" "+ year ;
   

},1000);

window.addEventListener("click", () =>
{
    document.getElementById("audio").play();
})