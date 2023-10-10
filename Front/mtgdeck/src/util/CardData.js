
class CardDataIndexor {
    constructor(data) {
        this.data = new Map();
        this.data.set('English',
            new CardData ( 
                data.name, 
                data.image_uris.normal,
                data.image_uris.art_crop,
                data.name,
                data.oracle_text
            )
        );
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


    constructor (name, img, croppedImg, ogName, description) {
        this.name = name;
        this.img = img;
        this.croppedImg = croppedImg;
        this.ogName = ogName;
        this.description = description;
    }

}


class CardDeckUnit {

    constructor (card, quantity) {
        this.cardData = card;
        this.quantity = quantity;
    }

    getCardOGName () {
        return this.cardData.ogName;
    }
}

class CardDeck {

    constructor (cardList) { 
        this.deck = [];
        for (let i = 0; i < cardList.length; i++) {
            this.addCardInDeck(cardList[i]);
        }

    }

    addCardInDeck (card) {
        let cardDeckUnit = this.findCardByOGName(card.ogName);
        if (cardDeckUnit == undefined) {
            this.deck.push(new CardDeckUnit(card, 1));
        } else {
            cardDeckUnit.quantity++;
        }
        return this;
    }

    removeCardInDeck (card) {
        let cardDeckUnit = this.findCardByOGName(card.ogName);
        if (cardDeckUnit != undefined) {
            if (cardDeckUnit.quantity == 1) {
                this.deck.splice(this.deck.indexOf(cardDeckUnit), 1);
            } else {
                cardDeckUnit.quantity--;
            }
        }
        if (cardDeckUnit.quantity == 0) {
            this.deck.splice(this.deck.indexOf(cardDeckUnit), 1);
        }
        return this;
    }


    findCardByOGName (ogName) {
        for (let i = 0; i < this.deck.length; i++) {
            if (this.deck[i].getCardOGName() == ogName) {
                return this.deck[i];
            }
        }
        return undefined;

    }

    getCardList () {
        let res = [];
        for (let i = 0; i < this.deck.length; i++) {
            for (let j = 0; j < this.deck[i].quantity; j++) {
                res.push(this.deck[i].cardData);
            }
        }
        return res;
    }

    getNumberOfCards () {
        let res = 0;
        for (let i = 0; i < this.deck.length; i++) {
            res += this.deck[i].quantity;
        }
        return res;
    }


}

export  {CardDataIndexor, CardData, CardDeck};