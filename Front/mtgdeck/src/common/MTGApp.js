import React from "react";
import Card from "./component/container/Card";
import SearchBar from "./component/SearchBar";
import {CardDisplayer, CardDisplayerListView, CardDisplayerDeck} from "./component/CardDisplayer";
import ButtonWithIcon from "./component/basic/ButtonWithIcon";
import Grid_box from "../asset/svg/Grid_box.svg";
import CardListIcon from "../asset/svg/CardListIcon.png";
import {CardDataIndexor, CardData, CardDeck} from "../util/CardData";


const DeckList = (props) => {
    console.log(props.cards);
    return (
        <div class="grid grid-cols-5 gap-4">
            {props.cards.map((card) => (
                <CardDisplayerDeck
                    card = {card.cardData}
                    count = {card.quantity}
                    addSelectedCards={props.addCardToSelection}
                    removeCardInDeck={props.removeCardInDeck}
                />
            ))}
        </div>
    );

}


const CardList = (props) => {
    let filteredCards = filterCardsWithImage(props.cards);
    if (props.displayStyle == "list") {
        return (
            <div class="grid grid-cols-2 gap-4">
                {filteredCards.map((card) => (
                    <CardDisplayerListView
                        card = {card}
                        addSelectedCards={props.addCardToSelection}
                    />
                ))}
            </div>
        );
    } else  {
        return (
            <div class="grid grid-cols-5 gap-4">
                {filteredCards.map((card) => (
                    <CardDisplayer
                        card = {card}
                        addSelectedCards={props.addCardToSelection}
                    />
                ))}
            </div>
        );
    }
}


function filterCardsWithImage(cards) {
    let res = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].img != null) {
            res.push(cards[i]);
        }
    }
    return res;
}

function MTGApp()  {

    const [searchedCards, setSearchedCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [selectedCards, setSelectedCards] = React.useState([]);
    const [displayStyle, setDisplayStyle] = React.useState("grid");
    const [cardDeck, setCardDeck] = React.useState(new CardDeck([]));

    const addNewSearchedCards = (cardData) => { 
        searchedCards.push(cardData);
        setSearchedCards(searchedCards);
    }

    const addCardInDeck = (cardData) => {
        cardDeck.addCardInDeck(cardData);
        setCardDeck(new CardDeck(cardDeck.getCardList()));
    }

    const removeCardInDeck = (cardData) => {
        cardDeck.removeCardInDeck(cardData);
        setCardDeck(new CardDeck(cardDeck.getCardList()));
    }

    const resetSearchedCards = () => {
        searchedCards.splice(0, searchedCards.length);
        setSearchedCards(searchedCards);
    }

    return (
        <>
            <div class="m-5 ">
                <div class="py-3">
                    <Card title="Formulaire de recherche">

                        <div class="flex flex-row">
                            <div class="px-5">
                                Mode d'affichage :
                            </div>
                            <ButtonWithIcon
                                onClick={() => setDisplayStyle("list")}
                                image={CardListIcon}
                                text="List"
                                customColor="blue"
                            />
                            <ButtonWithIcon
                                onClick={() => setDisplayStyle("grid")}
                                image={Grid_box}
                                text="Grid"
                            />
                        </div>

                        <SearchBar
                            onSubmit={addNewSearchedCards}
                            resetSearchedCards={resetSearchedCards}
                            displayLoadingSpinner={setIsLoading}
                        />
                    </Card>

                    <div class="py-3">
                        <Card title="Resultat de la recherche">
                            <CardList
                                cards={searchedCards}
                                addCardToSelection={addCardInDeck}
                                displayStyle={displayStyle}
                            />
                        </Card>
                    </div>

                    <div class="py-3">
                        <Card title="Selection de cartes">
                            <h2 class=" text-center mx-auto my-3  text-xl">Nombre de cartes : {cardDeck.getNumberOfCards()}</h2>
                            <DeckList
                                cards={cardDeck.deck}
                                displayStyle={displayStyle}
                                addCardToSelection={addCardInDeck}
                                removeCardInDeck={removeCardInDeck}
                            />
                        </Card>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MTGApp;