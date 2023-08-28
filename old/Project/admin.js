function openTab(evt,name){
    let i;
    let tabcontent;
    let tablink;
    tabcontent=document.getElementsByClassName("tabcontent");
    for (i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablink=document.getElementsByClassName("tablink");
    for (i=0;i<tablink.length;i++){
        tablink[i].className=tablink[i].className.replace(" active","");
    }
    document.getElementById(name).style.display="block";
    evt.currentTarget.className+=" active";


}

window.history.forward();
function noBack() {
    window.history.forward();
}