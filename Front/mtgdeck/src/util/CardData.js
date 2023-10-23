
class CardDataIndexor {
    constructor(data) {
        this.data = new Map();
        this.data.set('English',
            new CardData ( 
                data
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

/**
 * Classe permettant de stocker les données importantes d'une carte
 * @param {*} data les données de la carte recu par API
*/
class CardData {


    constructor (data) {
        console.log(data);
        this.name = data.name;
        this.img = data.image_uris.normal;
        this.croppedImg = data.image_uris.art_crop;
        this.ogName = data.name;
        this.description = data.oracle_text;
        this.type = data.type_line;
    }

}

/**
 * Classe représentant une carte dans un deck
 */
class CardDeckUnit {

    constructor (card, quantity) {
        this.cardData = card;
        this.quantity = quantity;
    }

    getCardOGName () {
        return this.cardData.ogName;
    }
}

/**
 * Classe représentant un deck
*/
class CardDeck {

    constructor (cardList) { 
        this.deck = [];
        for (let i = 0; i < cardList.length; i++) {
            this.addCardInDeck(cardList[i]);
        }
        this.cardNumber = this.getNumberOfCards();
    }

    /**
     * Ajoute une occurence d'une carte dans les deck
     * @param {*} card la carte à ajouter
     * @returns 
     */
    addCardInDeck (card) {
        let cardDeckUnit = this.findCardByOGName(card.ogName);
        if (cardDeckUnit == undefined) {
            this.deck.push(new CardDeckUnit(card, 1));
        } else {
            cardDeckUnit.quantity++;
        }
        this.cardNumber++;
        return this;
    }

    /**
     * Supprime une occurence d'une carte dans les deck
     * @param {*} card la carte à supprimer
     * @returns 
     */
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
        this.cardNumber--;
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

    getNumbreOfATypeOfCard (type) {
        let res = 0;
        for (let i = 0; i < this.deck.length; i++) {
            if (this.deck[i].cardData.type.includes(type)) {
                res += this.deck[i].quantity;
            }
        }
        return res;
    }

    /**
     * Permet de récupérer le ratio d'un type de carte dans le deck
     * @param {*} type  Le type de carte
     * @returns la valeur du ratio en pourcentage
     */
    getTypeRatio (type) {
        let res = this.getNumbreOfATypeOfCard(type);
        let total = this.getNumberOfCards();
        return Math.floor((res/total)*100);
    }


}

export  {CardDataIndexor, CardData, CardDeck}; 