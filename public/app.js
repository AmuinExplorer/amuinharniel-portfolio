window.addEventListener('scroll', () => {
    const downScrollIndicator = document.querySelector('.down-scroll');// get down scroll class
    const links = document.querySelector('.link');// get link class
    const btn = document.querySelectorAll('.btn');// get all classes named .btn
    const scroll = window.scrollY;// get scrollY dynamically

    // remove animated down scroll indicator
    scroll !== 0 ?
        downScrollIndicator.classList.add('hidden')
    :
        downScrollIndicator.classList.remove('hidden')
    
    // add background color for navigation bar links
    if(scroll >= 180) 
    {
        links.classList.add('bg-neutral-200');
        // loop every btn and add text color class
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.add('text-rose-400');
        }
    } 
    else 
    {
        links.classList.remove('bg-neutral-200');
        // loop every btn and add text color class
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('text-rose-400');
        }
    }

})

const mobileLink = document.querySelector('.mobile-nav');// mobile nav 
const btn = document.querySelector('.btns');// menu buttons
const btnNames = ['Image_72.svg', 'icon-close-menu.svg'];// svg names

// change button sources
btn.addEventListener('click', () => {
    mobileLink.classList.toggle('opacity-0')
    mobileLink.classList.toggle('toggle');
    mobileLink.classList.contains('opacity-0') ?
        (btn.src = src(btnNames[0]))
    :
        (btn.src = src(btnNames[1]))
})

// change btn sources handler
function src(index) {
    const url = `images/${index}`;
    return url;
}

function sendVerify() {
    const sendBtn = document.querySelector('.sendBtn');
    sendBtn.value = 'Gmail will open or any mailing service'
}