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