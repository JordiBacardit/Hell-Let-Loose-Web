function mostra(idSold){
    
    let llArts = document.querySelectorAll("article");
    for (let i=0; i<llArts.length; ++i)
        llArts[i].className = "noVisible";
    let soldat = document.getElementById(idSold);
    soldat.className = "";
}

window.onload = function() {
    let ll_enll = document.querySelectorAll(".enllaç");
    for(let i = 0; i < ll_enll.length; ++i){
        ll_enll[i].onclick = function(){
            mostra(this.getAttribute("data-funcio_soldats"));
        }
    }
    
    document.querySelector("article").className = "";
}
