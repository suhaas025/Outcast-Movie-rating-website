function watchlist1(){
    window.load('main.html#moonknight');
    var watchlist=document.getElementById('moonknight').style.display='block';
    localStorage.watch=watchlist;
    
}
var i=0;
function watchlist()
{
    
    document.getElementById('moonknight').style.display='block';
    i=1;
    document.getElementById('i').style.color="black";
    localStorage.setItem(i,1);
}
function list(){
    localStorage.getItem(i);
    if(i==1)
    {
        document.getElementById('beast').style.display='block'; 
        
    }
    else if(i==2)
    {
        document.getElementById('beast').style.display='block'; 
    }
}