function openTab1(evt,name){
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


function logout(){
    /*window.open("../SuperMarket.php");
    window.close();
    window.history.forward();*/
}


    window.history.forward();
    function noBack() {
        window.history.forward();
    }

    function fun(){
        document.write("w");
    }