import {myfino} from "./Data.js"
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
console.log(myfino);



// const setPlanteInfo =()=>{
//     let planetImg =document.getElementById('planetImg');
//     planetImg.setAttribute('src',myfino[0].img)
// }

// setPlanteInfo()
let planetImg =document.getElementById('planetImg');
planetImg.setAttribute('src',myfino[1].img)

let liList = document.querySelectorAll('#liList')
liList.forEach((val,i)=>{
    val.addEventListener('click',()=>{
        let planetImg =document.getElementById('planetImg');
        planetImg.setAttribute('src',myfino[i].img)
    })
})
function showAdd(number){
    switch(number){
        case 1:
            p1.classList.add('active');
            p2.classList.remove('active');
            p3.classList.remove('active');
            p4.classList.remove('active');
            break;
        case 2:
            p1.classList.remove('active');
            p2.classList.add('active');
            p3.classList.remove('active');
            p4.classList.remove('active');
            break;   
            
        case 3:
            p1.classList.remove('active');
            p2.classList.remove('active');
            p3.classList.add('active');
            p4.classList.remove('active');
            break;
        case 4:
            p1.classList.remove('active');
            p2.classList.remove('active');
            p3.classList.remove('active');
            p4.classList.add('active');
             break;
        default :
            p1.classList.add('active')
            p2.classList.remove('active');
            p3.classList.remove('active');
            p4.classList.remove('active');
    }
}