window.addEventListener("load",function(){
    console.log(document.querySelector("h1"))
    document.querySelector("h1").classList.add("heading")
})

window.addEventListener("dblclick", function(){
    alert(new Date())
})

document.querySelector("#toggle").addEventListener("click", function(){
    console.log(document.querySelector("#emailBox"))
    document.querySelector("#emailBox").classList.toggle("hidden")
})
