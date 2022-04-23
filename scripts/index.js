const popup = document.querySelector('.popup');
const btn = popup.querySelector('.popup__btn');
const img = popup.querySelector('.popup__img');
const text = popup.querySelector('.popup__text');
const imgContainer = document.querySelectorAll('.photo-grid__item');
const page = document.querySelector('.page');
const content = [];


imgContainer.forEach((imgs)=>{
    imgs.addEventListener('click', (evt)=>{
        img.src = evt.currentTarget.src;
        text.textContent = evt.target.alt;
        img.alt = text.textContent;
        popup.classList.add('popup_active');
        page.style = 'overflow: hidden;';
        btn.addEventListener('click', function (){
            popup.classList.remove('popup_active');
            page.style = 'overflow: none;';
        })
    })
})
