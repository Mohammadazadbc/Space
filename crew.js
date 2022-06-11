import {CrewData} from "./Data.js"
let crewImg= document.getElementById('crewImg');
let jobTitle = document.getElementById('jobTitle')
let crewName = document.getElementById('crewName')
let crewDesc = document.getElementById('crewDesc')

const point1 = document.querySelector('.point1')
const point2 = document.querySelector('.point2')
const point3 = document.querySelector('.point3')
const point4 = document.querySelector('.point4')
crewImg.setAttribute('src',CrewData[0].img )
jobTitle.innerText = CrewData[0].jobTitle
crewName.innerText = CrewData[0].crewName
crewDesc.innerText = CrewData[0].crewDesc

let point = document.querySelectorAll('#point');

point.forEach((val,i)=>{
    val.addEventListener('click',()=>{
        let crewImg= document.getElementById('crewImg');
        let jobTitle = document.getElementById('jobTitle')
        let crewName = document.getElementById('crewName')
        let crewDesc = document.getElementById('crewDesc')
    
        crewImg.setAttribute('src',CrewData[i].img)
        jobTitle.innerText = CrewData[i].jobTitle
        crewName.innerText = CrewData[i].crewName
        crewDesc.innerText = CrewData[i].crewDesc
    })

    
    
})


function showPerson(){
    
    point1.addEventListener('click',()=>{
        point1.classList.add('active')
        point2.classList.remove('active')
        point3.classList.remove('active')
        point4.classList.remove('active')
    })

    point2.addEventListener('click',()=>{
        point2.classList.add('active')
        point3.classList.remove('active')
        point1.classList.remove('active')
        point4.classList.remove('active')
    })
    point3.addEventListener('click',()=>{
        point2.classList.remove('active')
        point1.classList.remove('active')
        point3.classList.add('active')
        point4.classList.remove('active')
    })
    point4.addEventListener('click',()=>{
        point4.classList.add('active')
        point1.classList.remove('active')
        point3.classList.remove('active')
        point2.classList.remove('active')
    })


}

showPerson()