// template_wuls7zo
// service_w7454r5
// pmE2Ru5hNBAHnk6tq

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
    .sendForm(
        'service_w7454r5',
        'template_wuls7zo',
        event.target,
        'LkdJZdKsXT5rhtj85'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }) .catch(() => {
        loading.classList.remove('modal__overlay--visible')
       alert(
        "This email service is temporarily unavailable. Contact me on other platforms!"
       )
    })
}


let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen=false;
        return document.body.classList.remove("modal--open");
        
    }
    isModalOpen = true;
 document.body.classList += " modal--open"   
}

let contrastToggle = false;
function toggleContrast() {
contrastToggle = !contrastToggle
if (contrastToggle) {
 document.body.classList += " dark-theme"    
}
 else {
    document.body.classList.remove("dark-theme")
}

}

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}