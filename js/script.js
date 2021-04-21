new Splide( '.splide', {
    type   : 'loop',
    arrow: 'img/s',
    autoWidth: true,
    focus    : 'center',
} ).mount();


let modal1 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
let modal2 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});

document.querySelector(".modal1").addEventListener('click', () => {
    modal1.open()
})
document.querySelector(".modal2").addEventListener('click', () => {
    modal2.open()
})

modal1.setContent('<img class="modal-IMG" src="img/lohman.png" alt="content">')
modal2.setContent('<img class="modal-IMG" src="img/tubex.png" alt="content">')





// modal 8.1

let modal8_1 = new tingle.modal({

})

document.querySelector("#modal8_1_link").addEventListener('click', () => {
    modal8_1.open()
})
document.querySelector("#modal8_1_close").addEventListener('click', () => {
    modal8_1.close()
})

let modal8_1_content = document.querySelector(' #modal8_1_content');
modal8_1.setContent(modal8_1_content);

// modal 8.2

let modal8_2 = new tingle.modal({

})

document.querySelector("#modal8_2_link").addEventListener('click', () => {
    modal8_2.open()
})
document.querySelector("#modal8_2_close").addEventListener('click', () => {
    modal8_2.close()
})

let modal8_2_content = document.querySelector(' #modal8_2_content');
modal8_2.setContent(modal8_2_content);

// modal 8.3

let modal8_3 = new tingle.modal({

})

document.querySelector("#modal8_3_link").addEventListener('click', () => {
    modal8_3.open()
})
document.querySelector("#modal8_3_close").addEventListener('click', () => {
    modal8_3.close()
})

let modal8_3_content = document.querySelector(' #modal8_3_content');
modal8_3.setContent(modal8_3_content);

// modal 8.4

let modal8_4 = new tingle.modal({

})

document.querySelector("#modal8_4_link").addEventListener('click', () => {
    modal8_4.open()
})
document.querySelector("#modal8_4_close").addEventListener('click', () => {
    modal8_4.close()
})

let modal8_4_content = document.querySelector(' #modal8_4_content');
modal8_4.setContent(modal8_4_content);