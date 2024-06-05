let navBar = document.querySelector('.navbar');
let navBarBrand = document.querySelector('.navbar-brand');
let hide = document.querySelector('.hide');
let hide2 = document.querySelector('.hide2');
let centerScroll = document.querySelector('.center-scroll');
let navDiv = document.querySelector(`.navDiv`)





window.addEventListener('scroll', () => {
    let scrolled = window.scrollY
    if (scrolled > 30) {
        navBar.classList.remove('w-75', 'rounded-bottom-5');
        navBar.classList.add('w-100');
        hide.classList.add('d-md-none');
        hide2.classList.add('d-md-none');
        navDiv.classList.add(`flex-md-column`)
    } else {
        navBar.classList.add('w-75', 'rounded-bottom-5')
        navBar.classList.remove('w-100')
        hide.classList.remove('d-md-none');
        hide2.classList.remove('d-md-none');
        navDiv.classList.remove(`flex-md-column`)
    }

})

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');


function createInterval(total, finalNumber, time) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < total) {
            counter++
            finalNumber.innerHTML = '+' + counter
        } else {
            clearInterval(interval)
        }
    }, time)
}

let check = true;
let observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting && check) {
            createInterval(600, firstNumber, 20)
            createInterval(1000, secondNumber, 10)
            createInterval(50, thirdNumber, 100)
            check = false;
            setTimeout(() => {
                check = true
            }, 12000)
        }
    })
});

observer.observe(thirdNumber)

let masterWrapper = document.querySelector('#masterWrapper')

let masters = [
    {
        name: 'Francesco', linguaggi: 'PHP', URL: 'https://picsum.photos/200'
    },
    {
        name: 'Nicolò', linguaggi: 'JavaScript', URL: 'https://picsum.photos/201'
    },
    {
        name: 'Carlo Alberto', linguaggi: 'CSS3', URL: 'https://picsum.photos/202'
    },
    {
        name: 'Giuseppe', linguaggi: 'Java', URL: 'https://picsum.photos/203'
    },
    {
        name: 'David', linguaggi: 'C++', URL: 'https://picsum.photos/204'
    },
]
masters.forEach((master, i) => {
    if (i >= masters.length - 3) {
        let div = document.createElement('div');
        div.classList.add('col-12', 'col-md-4', 'py-3', 'px-3');
        div.innerHTML = `
        <div class="card text-bg-dark border-0"> <img src="${master.URL}" class="card-img" alt="...">
        <div class="card-img-overlay opacity-0 d-flex justify-content-center flex-column  align-items-center">
        <h5 class="card-title text-warning shadow-cards">${master.name}</h5>
        <p class="card-text text-warning shadow-cards"> Esperto in ${master.linguaggi}</p>
        </div>
        </div>`

        masterWrapper.appendChild(div);
    }
});

/* masterWrapper.addEventListener('hover' ()=>{
        masterWrapper.classList.toggle('')

}) */


const reviews = [
    { name: `Alfonso`, description: `Sviluppatori completamente inaffidabili mi hanno rotto il computer e rubato l'argenteria penso farò denuncia` },
    { name: `Roberto`, description: `Sto chiamando i carabbbinieri` },
    { name: `Giovanni la Roccia`, description: `Attendo ancora il mio sito` },
    { name: `Enrico Vasaio`, description: `Top! Affidabilissimi` },
    { name: `Pancrazio`, description: `Li preferivo quando si chiamavano stockisti` }
]

let reviewsSwiperWrapper = document.querySelector('#reviewsSwiperWrapper');
reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide', `flex-column` , "p-4");
    div.innerHTML = 
     `<h3 class= 'fw-bold font-title text-dark'>${review.name}</h3>
        <p class="fs-5 mt-3 text-dark">${review.description}</p>`


    reviewsSwiperWrapper.appendChild(div)
})


//!sezione script swiper

let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
