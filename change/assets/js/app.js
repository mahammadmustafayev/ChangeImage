let box = document.querySelectorAll(".box")
let proImg=document.querySelector(".pro-img");


box.forEach(item => {
    item.addEventListener("click",function () {
        proImg.src=this.children[0].src
    })
});