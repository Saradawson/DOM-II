import './less/index.less'

// Your code goes here!
// click
const h1 = document.querySelector('h1.logo-heading');
console.log(h1)
h1.onclick = function () {
    console.log('you clicked');
}
h1.addEventListener('click', function(evt) {
    console.log(`
        event type: ${evt.target}
        event target: ${evt.target.nodeName}
    `)
})

// mouseover
h1.addEventListener('mouseover', function(evt) {
    evt.target.style.color = 'purple';
})

// keydown 

function enterKey(evt) {
    if (evt.key === 'Enter'){
    h1.style.color = 'red';
    }
}

document.addEventListener('keydown', enterKey);

// wheel
let scale = 1;
const el = document.querySelector('.nav-container');
document.addEventListener('wheel', zoom);

 function zoom(evt) {
    if(evt.deltaY < 0){
        scale += evt.deltaY*-0.01;
    } else {
        scale /= evt.deltaY*2
    }
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
document.onwheel = zoom;





