// let menu=document.getElementById('menu');

// function createLi(name){
//     let li=document.createElement('li');
//     li.innerHTML=name;
//     return li;

// }
// menu.appendChild(createLi('jaynal'));


// menu.appendChild(createLi('Abedin'));


// menu.appendChild(createLi('jay'));






// let note=  document.getElementById('note');
// console.log(note.textContent)

// let menu=document.querySelector('#menu');
// console.log(menu.innerHTML)

// let menu=document.querySelector('#menu');

// let p=document.createElement('p');

// p.textContent='js dom tutorial';
// menu.appendChild(p)

// let menu=document.querySelector('#menu');
// menu.innerHTML='<p>js dom</p>'

let menu=document.querySelector('#menu');

let lang=['python','JAva','js','go'];
let fragment=document.createDocumentFragment();
lang.forEach((language)=>{
    let li=document.createElement('li');
    li.innerHTML=language;
   fragment.appendChild(li);
})
menu.appendChild(fragment);





let demo=document.querySelector('#demo');

let vasha=['Bangla','English','Farshi','Urdu'];
let fragmenc=document.createDocumentFragment('p');
vasha.forEach((basha)=>{
    let p=document.createElement('p');
    p.innerHTML=basha;
    fragmenc.appendChild(p);
})
demo.appendChild(fragmenc);
