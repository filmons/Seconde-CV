function ScrollApear(){
    var innerHTML = document.querySelector('.innerHTML');
    var introPostion = innerHTML.getElementsByInnerHTML().top;
    var screenPosition = window.innerHeight/2;
    if(introPostion > screenPosition){
        innerHTML.Classlist.add(indexHTML);
    }

}
window;addEventListener('scroll',ScrollApear);