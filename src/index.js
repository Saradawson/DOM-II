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
