// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
    'https://gundamplacestore.com/cdn/shop/collections/image_053fed82-79db-4a58-84bb-e000810db3fe.jpg?v=1696812186&width=1100',
    'https://en.gundam.info/images/gundaminfobox-global/article5/main.jpg',
    'https://i.ytimg.com/vi/kGTpjYuR2Nk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnq9kG--cMyTf5wRX69lQuxP2XNA',
    'https://i.ytimg.com/vi/CfdjG9UuoQI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAt_oJxZNJBB1b_M-07JnudaE_LMA',
    'https://i.ytimg.com/vi/NWKej7aJTlg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtL6b2C0XnydKZdyu8uj7n1MLgDA'
];

// variables
let cardCount = 0;

// functions
function appendNewCard(){
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        onLike:() => {
            like.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            like.classList.toggle('trigger')
        },
        onDislike:() => {
            dislike.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            dislike.classList.toggle('trigger')
        }
    });
    // card.element.style.setProperty('--i',cardCount%5);
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
}

// first 5 cards
for (let i = 0; i < 5; i++){
    appendNewCard();
}