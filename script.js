const sechand= document.querySelector(".secendhend");
const minhand= document.querySelector(".minuthend");
const hourhand= document.querySelector(".hourshand");
function setData(){
   const now= new Date();
   const setsec = now.getSeconds();
   const secdeg = ((setsec / 60)*360)+90;
   sechand.style.transform = `rotate(${secdeg}deg)`

   const setmin = now.getMinutes();
   const mindeg = ((setmin / 60)*360)+90;
   minhand.style.transform = `rotate(${mindeg}deg)`

   const sethou = now.getHours();
   const houdeg = ((sethou / 12)*360)+90;
   hourhand.style.transform = `rotate(${houdeg}deg)`
   console.log(secdeg)
   
}

setInterval(setData, 1000)