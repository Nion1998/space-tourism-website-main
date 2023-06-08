
var tab_btns =document.querySelectorAll(".tab-btn")
var tab_imgs =document.querySelectorAll(".tab-img")
var tab_containers =document.querySelectorAll(".text-section")


tab_btns.forEach( (tab_btn, index)=>{
    console.log(tab_btn)
    tab_btn.addEventListener('click',()=>{
        console.log(tab_btn)
        tab_btns.forEach(tab_btn=>{tab_btn.classList.remove('active')})
        tab_btn.classList.add('active'); 

        tab_imgs.forEach(tab_img=>{tab_img.classList.remove('active')})
        tab_imgs[index].classList.add('active');

        tab_containers.forEach(tab_container=>{tab_container.classList.remove('active')})
        tab_containers[index].classList.add('active');
       })
    })