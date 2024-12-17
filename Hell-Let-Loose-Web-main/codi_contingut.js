function mostra(enll, idSold){
    let ll_soldats = document.getElementsByClassName("soldats");
    if (ll_soldats.length > 0) ll_soldats[0].className = "noVisible";

    document.getElementById(idSold).className = "soldats";
}

window.onload = function() {
    let ll_enll = document.querySelectorAll(".enllaç");
    for(let i = 0; i < ll_enll.length; ++i){
        ll_enll[i].onclick = function(){
            mostra(this, this.getAttribute("funcio_soldats"));
        }
    }
}