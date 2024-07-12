let x = document.getElementById("ele1")
x.addEventListener("click",function(){
    x.style.backgroundColor ="red"
    x.style.color = "yellow"
})
let a = document.getElementById("ele2")
a.addEventListener("mouseenter",function(){
    a.style.backgroundColor ="orange"
    a.style.color = "white"
})
let b = document.getElementById("ele2")
b.addEventListener("mouseleave",function(){
    a.style.backgroundColor ="white"
    a.style.color = "black"
})
let z = document.getElementById("ele3")
z.addEventListener("click",function(){
    z.style.backgroundColor ="purple"
    z.style.color = "black"
})