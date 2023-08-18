
function  valb(){
    document.getElementById('im1').src='tick.png'
    const i=document.getElementById("val").value; 
    
    localStorage.setItem('i',i);
    
    
    
    return;
}
function valsp(){
    document.getElementById('im').src='tick.png';
    const j=document.getElementById("sp").value;
    localStorage.setItem('j',j);
    
    
    
    return;

}

window.addEventListener('load',function(){
    const x=localStorage.getItem('i');
    const y=localStorage.getItem('j');
    

   
    
})
window.addEventListener('load',function(){
    const x=localStorage.getItem('i');
   
   

   if(x=="1"){document.getElementById("beast").style.display="block";}
   
})

window.addEventListener('load',function(){
    
    const y=localStorage.getItem('j');
   
    if(y=="2"){document.getElementById("spiderman").style.display="block";}
   
})