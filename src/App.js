import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import CardDeck from './services/cards/card-deck';
import CardHand from "./services/cards/card-hand";

class App extends Component {
    constructor(props) {
        super(props);
        this.cardDeck = new CardDeck();
        this.state = {
            myCards: this.cardDeck.getCards(5),
        };
    }

    shuffleCard = () => {
        this.cardDeck.newDeck();
        this.setState({ myCards: this.cardDeck.getCards(5) });
    };

    render() {
        const { myCards } = this.state;

        const myNewCards = myCards.map(card => <Card key={card.rank + card.suit} rank={card.rank} suit={card.suit} />);
        const title = CardHand.getCardHand(myCards);
        console.log(title);
        return (
            <>
                {title}
                <hr/>
                <button onClick={this.shuffleCard}>shuffle cards</button>
                <hr />
                {myNewCards}
            </>
        )
    }
}

export default App;