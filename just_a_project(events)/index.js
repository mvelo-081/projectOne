let no_btn = document.getElementById('no-btn');
let yes_btn = document.getElementById('yes-btn');
let mssg = document.getElementById('mssg');
let emoji = document.getElementById('emoji');

no_btn.addEventListener("mouseenter", (event) => {    
    event.target.style.backgroundColor = 'green';
    event.target.style.color = 'aliceblue';
    event.target.style.fontSize = '1.5rem';
    event.target.textContent = "Yes"
    //
    yes_btn.style.backgroundColor = 'rgb(174, 3, 3)';
    yes_btn.style.color = 'aliceblue';
    yes_btn.style.fontSize = '1.5rem';
    yes_btn.textContent = "No"
    emoji.textContent = '😀';
})

no_btn.addEventListener('mouseout' ,(event) => {    
    event.target.style.backgroundColor = 'rgb(174, 3, 3)';
    event.target.style.color = 'aliceblue';
    event.target.style.fontSize = '1.5rem';
    event.target.textContent = "No"  
    //
    yes_btn.style.backgroundColor = 'green';
    yes_btn.style.color = 'aliceblue';
    yes_btn.style.fontSize = '1.5rem';
    yes_btn.textContent = "Yes"
    emoji.textContent = '🥺';
})

yes_btn.addEventListener('mouseenter', (event) => {
    emoji.textContent = '😀';
})

yes_btn.addEventListener('mouseleave', (event) => {
    emoji.textContent = '🥺';
})

function agreed() {
    emoji.textContent = '🥳';
    mssg.textContent = 'Aww ngazizwa ngibusisekile😍'
}