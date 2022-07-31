let images=new Array(
    ['public/bandera1.png'],
    ['public/bandera2.png',],
    ['public/bandera3.png',],
    ['public/bandera4.png',]
);
let random = 0;

function randomlyRotate()
{
    random++
    document.getElementById("imagen").src=images[random%images.length][0];
}
document.getElementById("imagen").addEventListener("click",randomlyRotate)

