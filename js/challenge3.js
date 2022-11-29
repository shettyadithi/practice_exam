window.addEventListener("load", function(){
    this.alert(document.querySelectorAll("figcaption")[1].innerHTML)
})

images = document.querySelectorAll("img")
display = document.querySelector("#display")
for (i = 0; i < images.length; i++){
    images[i].addEventListener("mouseenter",function(){
        display.style.backgroundImage = "url(" +this.src + ")"
        display.innerHTML = this.alt
        this.style.visibility = "hidden"
    });
}

for (i = 0; i < images.length; i++){
    images[i].addEventListener("mouseleave",function(){
        display.innerHTML = "Hover over an image"
        display.style.backgroundImage = ""
        this.style.visibility = "visible"

    });
}


for (i = 0; i < images.length; i++){
    images[i].addEventListener("focus",function(){
        display.style.backgroundImage = "url(" +this.src + ")"
        display.innerHTML = this.alt

    });
}

for (i = 0; i < images.length; i++){
    images[i].addEventListener("blur",function(){
        display.innerHTML = "Hover over an image"
        display.style.backgroundImage = ""

    });
}

images[1].setAttribute("tabindex","0")
