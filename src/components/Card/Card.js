import React from 'react';
import './Card.css';

const getSuitBySuitChar = suit => {
    switch (suit) {
        case 'D':
            return 'diams';
        case 'H':
            return 'hearts';
        case 'S':
            return 'spades';
        case 'C':
            return 'clubs';
    }
};

const getSymbolBySuitChar = suit => {
    switch (suit) {
        case 'D':
            return '♦';
        case 'H':
            return '♥';
        case 'S':
            return '♠';
        case 'C':
            return '♣';
    }
}

export default class Card extends React.Component {
    render() {
        const { rank, suit } = this.props;
        const rankLowerCase = rank.toLowerCase();
        const stringSuit = getSuitBySuitChar(suit);
        const symbol = getSymbolBySuitChar(suit);
        return (
            <div className={`Card Card-${stringSuit} Card-rank-${rankLowerCase}`}>
                <span className="Card-rank">{rank}</span>
                <span className="Card-suit">{symbol}</span>
            </div>
        )
    }
}