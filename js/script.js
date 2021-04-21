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

if (document.querySelector('#modal8_1_link') !== null){
    let modal8_1 = new tingle.modal({})
    document.querySelector("#modal8_1_link").addEventListener('click', () => {
        modal8_1.open()
    })
    document.querySelector("#modal8_1_close").addEventListener('click', () => {
        modal8_1.close()
    })

    let modal8_1_content = document.querySelector(' #modal8_1_content');
    modal8_1.setContent(modal8_1_content);
}

// modal 8.2

if (document.querySelector('#modal8_2_link') !== null){
    let modal8_2 = new tingle.modal({})
    document.querySelector("#modal8_2_link").addEventListener('click', () => {
        modal8_2.open()
    })
    document.querySelector("#modal8_2_close").addEventListener('click', () => {
        modal8_2.close()
    })

    let modal8_2_content = document.querySelector(' #modal8_2_content');
    modal8_2.setContent(modal8_2_content);
}

// modal 8.3

if (document.querySelector('#modal8_3_link') !== null){
    let modal8_3 = new tingle.modal({})
    document.querySelector("#modal8_3_link").addEventListener('click', () => {
        modal8_3.open()
    })
    document.querySelector("#modal8_3_close").addEventListener('click', () => {
        modal8_3.close()
    })

    let modal8_3_content = document.querySelector(' #modal8_3_content');
    modal8_3.setContent(modal8_3_content);
}

// modal 8.4


if (document.querySelector('#modal8_4_link') !== null){
    let modal8_4 = new tingle.modal({})
    document.querySelector("#modal8_4_link").addEventListener('click', () => {
        modal8_4.open()
    })
    document.querySelector("#modal8_4_close").addEventListener('click', () => {
        modal8_4.close()
    })

    let modal8_4_content = document.querySelector(' #modal8_4_content');
    modal8_4.setContent(modal8_4_content);
}




// modal 10.1

if (document.querySelector('#modal10_1_link') !== null){
    let modal10_1 = new tingle.modal({})
    document.querySelector("#modal10_1_link").addEventListener('click', () => {
        modal10_1.open()
    })
    document.querySelector("#modal10_1_close").addEventListener('click', () => {
        modal10_1.close()
    })

    let modal10_1_content = document.querySelector(' #modal10_1_content');
    modal10_1.setContent(modal10_1_content);
}

// modal 10.2

if (document.querySelector('#modal10_2_link') !== null){
    let modal10_2 = new tingle.modal({})
    document.querySelector("#modal10_2_link").addEventListener('click', () => {
        modal10_2.open()
    })
    document.querySelector("#modal10_2_close").addEventListener('click', () => {
        modal10_2.close()
    })

    let modal10_2_content = document.querySelector(' #modal10_2_content');
    modal10_2.setContent(modal10_2_content);
}

// modal 10.3

if (document.querySelector('#modal10_3_link') !== null){
    let modal10_3 = new tingle.modal({})
    document.querySelector("#modal10_3_link").addEventListener('click', () => {
        modal10_3.open()
    })
    document.querySelector("#modal10_3_close").addEventListener('click', () => {
        modal10_3.close()
    })

    let modal10_3_content = document.querySelector(' #modal10_3_content');
    modal10_3.setContent(modal10_3_content);
}

// modal 10.4

if (document.querySelector('#modal10_4_link') !== null){
    let modal10_4 = new tingle.modal({})
    document.querySelector("#modal10_4_link").addEventListener('click', () => {
        modal10_4.open()
    })
    document.querySelector("#modal10_4_close").addEventListener('click', () => {
        modal10_4.close()
    })

    let modal10_4_content = document.querySelector(' #modal10_4_content');
    modal10_4.setContent(modal10_4_content);
}