const isFlush = (cards) => {
    const firstCard = cards[0];
    const { suit } = firstCard;
    for (let i = 0; i < 5; i++) {
        if (cards[i].suit !== suit) {
            return false;
        }
    }
    return true;
};

const isTreeOfKinds = (cards) => {
    const firstCard = cards[0];
    const { rank } = firstCard;
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            for (let r = j + 2; r < 5; r++) {
                if (cards[i].rank === cards[j].rank && cards[i].rank === cards[r].rank) {
                    return true;
                }
            }
        }
    }
};

const isTwoPairs = (cards) => {
    let count = 0;
    const firstCard = cards[0];
    const { suit } = firstCard;
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            if (cards[i].suit === cards[j].suit) {
                count++;
            }
        }
    }
    if (count > 2) {
        return true;
    }
};

const isOnePair = (cards) => {
    const firstCard = cards[0];
    const { rank } = firstCard;
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            if (cards[i].rank === cards[j].rank) {
                return true;
            }
        }
    }
};

export default class CardHand {

    static getCardHand(cards) {
        if (isFlush(cards)) {
            return 'Flush';
        } if (isTreeOfKinds(cards)) {
            return 'Tree Of Kinds';
        } if (isTwoPairs(cards)) {
            return 'Two Pairs';
        } if (isOnePair(cards)) {
            return 'One Pair';
        } else {
            return 'Without Combination';
        }
    }
}