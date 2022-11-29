window.addEventListener("load", function(){
    // console.log(document.querySelector("#billing"))
    console.log(document.querySelector("#billing").value)

})

document.querySelector("input").addEventListener("click", function(){
    console.log("Clicked on input")
    if (this.checked){
        document.querySelector("#home").value = document.querySelector("#billing").value
        document.querySelector("#home").setAttribute("disabled",'')
    }
    else{
        document.querySelector("#home").value = ""
        document.querySelector("#home").removeAttribute("disabled",'')
    }
})
