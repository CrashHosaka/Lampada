let taquebrada=false
function on(){
    if (!taquebrada){
    document.querySelector("#lampada").src="ligada.png"
    }
}
function off(){
    document.querySelector("#lampada").src="desligada.png"
}
function quebra(){
    document.querySelector("#lampada").src="quebrada.png"
}
function pisca(){
    let intervalo = 0;
    for(i=0;i<10;i++){
        intervalo +=300
        setTimeout("document.querySelector('#lampada').src='ligada.png' ", intervalo);
        intervalo += 300
        setTimeout("document.querySelector('#lampada').src='desligada.png' ", intervalo);
    }
}

let lamp=document.querySelector("#lampada")

lamp.addEventListener("mouseover", on)
lamp.addEventListener("mouseleave", off)
lamp.addEventListener("dblclick", quebra)
