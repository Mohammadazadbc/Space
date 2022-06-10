let navBarP = document.querySelectorAll(".p");
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')

// for(let p of navBarP ){
//     p.addEventListener('click',()=>{
//         p.classList.toggle("active")
//     })
// }

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
    }
}