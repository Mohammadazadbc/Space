import {destinationData} from "./Data.js"

let planetImg =document.getElementById('planetImg');
planetImg.setAttribute('src',destinationData[1].img)


let planetTitle = document.getElementById('planetTitle');
planetTitle.innerText = destinationData[1].Name

let planteDesc = document.getElementById('planteDesc');
planteDesc.innerText = destinationData[1].desc

let avg_distanec = document.getElementById('avg_distanec');
avg_distanec.innerText = destinationData[1].destiance

let traveil_time = document.getElementById('traveil_time');
traveil_time.innerText = destinationData[1].travelTime


let liList = document.querySelectorAll('#liList')
liList.forEach((val,i)=>{
    val.addEventListener('click',()=>{
        let planetImg =document.getElementById('planetImg');
        planetImg.setAttribute('src',destinationData[i].img)

        let planetTitle = document.getElementById('planetTitle');
        planetTitle.innerText = destinationData[i].Name

        let planteDesc = document.getElementById('planteDesc');
        planteDesc.innerText = destinationData[i].desc

        let avg_distanec = document.getElementById('avg_distanec');
        avg_distanec.innerText = destinationData[i].destiance
        let traveil_time = document.getElementById('traveil_time');
        traveil_time.innerText = destinationData[i].travelTime        
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