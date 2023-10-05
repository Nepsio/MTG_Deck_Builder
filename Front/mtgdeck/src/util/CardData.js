
class CardDataIndexor {
    constructor(data) {
        this.data = new Map();
        this.data.set('English',
            new CardData ( 
                data.name, 
                data.imageUrl,
                data.name
            )
        );
        if (data.foreignNames != undefined) {
            for (let i = 0 ; i < data.foreignNames.length; i++) {
                this.data.set(
                    data.foreignNames[i].language, 
                    new CardData( 
                        data.foreignNames[i].name, 
                        data.foreignNames[i].imageUrl,
                        data.name
                    )
                );
            }
        }
    }


    getCardData(language) {
        let res = this.data.get(language);
        if (res == undefined) {
            res = this.data.get('English');
        }
        return res;
    }
  
}

class CardData {


    constructor (name, img, ogName) {
        this.name = name;
        this.img = img;
        this.ogName = ogName;
    }

}

class CardDeck {

    constructor (cards) {
        this.deck = cards;
        this.numberOfCardsByCard = this.indexNumberOfCardsInDeck();

    }

    indexNumberOfCardsInDeck() {
        let res = new Map();
        for (let i = 0; i < this.deck.length; i++) {
            if (res.has(this.deck[i].ogName)) {
                res.set(this.deck[i].ogName, res.get(this.deck[i].ogName) + 1);
            } else {
                res.set(this.deck[i].ogName, 1);
            }
        }
        return res;
    }

    addCard(card) {
        this.deck.push(card);
        if (this.numberOfCardsByCard.has(card.ogName)) {
            this.numberOfCardsByCard.set(card.ogName, this.numberOfCardsByCard.get(card.ogName) + 1);
        } else {
            this.numberOfCardsByCard.set(card.ogName, 1);
        }
    }

    removeCard(card) {
        let index = this.deck.indexOf(card);
        if (index > -1) {
            this.deck.splice(index, 1);
            if (this.numberOfCardsByCard.has(card.ogName)) {
                this.numberOfCardsByCard.set(card.ogName, this.numberOfCardsByCard.get(card.ogName) - 1);
            }
        }
    }




}

export  {CardDataIndexor, CardData, CardDeck};