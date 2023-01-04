function detectarMobile(){
    if(
        navigator.userAgent.match(/android/i)|| 
        navigator.userAgent.match(/iphone/i)|| 
        navigator.userAgent.match(/webOS/i)|| 
        navigator.userAgent.match(/ipad/i))
    {
        let classcapa = document.getElementsByClassName("capa")

        classcapa.style.backgroundImage = "url(assets/storm.jpg)"
        classcapa.style.backgroundSize = "cover"
        classcapa.style.backgroundRepeat = "none"

        return true
    }
    else{
        let classvideo = document.getElementsByClassName("bgvideo")
        classvideo.style.display = "none"
        return false
    }
}