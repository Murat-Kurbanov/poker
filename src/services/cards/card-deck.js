import CardBuilder from './card-builder';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));


class CardDeck {
    constructor() {
        this.newDeck();
    }

    newDeck() {
        this.allCards = CardBuilder.buildCards();
    }

    getCard() {
        const randomNumber = getRandomInt(this.allCards.length);
        const removeCount = 1;
        const [card] = this.allCards.splice(randomNumber, removeCount);
        return card;
    }

    getCards(howMany) {
        const cards = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;