const getSuitBy = (n) => {
    switch (n) {
        case 0:
            return 'D';
        case 1:
            return 'H';
        case 2:
            return 'S';
        case 3:
            return 'C';
    }
};

const getRankByNumber = (n) => {
    switch (n) {
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
        case 14:
            return 'A';
    }
};

export default class CardBuilder {
    static buildCards() {
        const allCards = [];
        for (let i = 2; i < 15; i++) {
            for (let j = 0; j < 4; j++) {
                let rank = i.toString();
                if (i >= 11) {
                    rank = getRankByNumber(i);
                }
                const suit = getSuitBy(j);
                allCards.push({ rank, suit });
            }
        }
        return allCards;
    }
}