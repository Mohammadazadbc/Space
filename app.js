import {myfino} from "./Data.js"
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')

let planetImg =document.getElementById('planetImg');
planetImg.setAttribute('src',myfino[1].img)


let planetTitle = document.getElementById('planetTitle');
planetTitle.innerText = myfino[1].Name

let planteDesc = document.getElementById('planteDesc');
planteDesc.innerText = myfino[1].desc

let avg_distanec = document.getElementById('avg_distanec');
avg_distanec.innerText = myfino[1].destiance

let traveil_time = document.getElementById('traveil_time');
traveil_time.innerText = myfino[1].travelTime


let liList = document.querySelectorAll('#liList')
liList.forEach((val,i)=>{
    val.addEventListener('click',()=>{
        let planetImg =document.getElementById('planetImg');
        planetImg.setAttribute('src',myfino[i].img)

        let planetTitle = document.getElementById('planetTitle');
        planetTitle.innerText = myfino[i].Name

        let planteDesc = document.getElementById('planteDesc');
        planteDesc.innerText = myfino[i].desc

        let avg_distanec = document.getElementById('avg_distanec');
        avg_distanec.innerText = myfino[i].destiance
        let traveil_time = document.getElementById('traveil_time');
        traveil_time.innerText = myfino[i].travelTime        
    })
})
let moon = document.querySelector('.moon')
let mars = document.querySelector('.mars')
let Europa = document.querySelector('.Europa')
let titan = document.querySelector('.titan')


function showAdd(){
    
    moon.addEventListener('click',()=>{
        moon.classList.add('active')
        mars.classList.remove('active')
        Europa.classList.remove('active')
        titan.classList.remove('active')
    })

    mars.addEventListener('click',()=>{
        mars.classList.add('active')
        Europa.classList.remove('active')
        moon.classList.remove('active')
        titan.classList.remove('active')
    })
    Europa.addEventListener('click',()=>{
        mars.classList.remove('active')
        moon.classList.remove('active')
        Europa.classList.add('active')
        titan.classList.remove('active')
    })
    titan.addEventListener('click',()=>{
        titan.classList.add('active')
        moon.classList.remove('active')
        Europa.classList.remove('active')
        mars.classList.remove('active')
    })


}

showAdd()