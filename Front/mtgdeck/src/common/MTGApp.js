import React from "react";
import {Card, CardSection, CardSectionScrollable} from "./component/container/Card";
import SearchBar from "./component/SearchBar";
import {CardDisplayer, CardDisplayerListView, CardDisplayerDeck, CardDeckDisplayerListView} from "./component/CardDisplayer";
import {ButtonWithIcon, DangerButton} from "./component/basic/Button";
import Grid_box from "../asset/svg/Grid_box.svg";
import CardListIcon from "../asset/svg/CardListIcon.png";
import {CardDataIndexor, CardData, CardDeck} from "../util/CardData";


const DeckList = (props) => {
    console.log(props.cards);
    return (
        <div class="grid grid-cols-1 gap-4">
            {props.cards.map((card) => (
                <CardDeckDisplayerListView
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
            <div class="grid grid-cols-3 xl:grid-cols-5 gap-4">
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
        console.log(cardData);
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
            <div class="mx-5  max-h-screen">
                <div class="py-3">

                    <div class="grid xl:grid-cols-3  md:grid-cols-3 sm:grid-cols-1  ">

                        <div class="py-3 xl:col-span-2  md:col-span-2 sm:col-span-1 pr-10">
                            <Card title="Data Base">

                                <CardSection>
                                    <DisplayPanel
                                        setDisplayStyle={setDisplayStyle}
                                    />

                                    <div class="py-5">
                                        <SearchBar
                                            onSubmit={addNewSearchedCards}
                                            resetSearchedCards={resetSearchedCards}
                                            displayLoadingSpinner={setIsLoading}
                                        />
                                    </div>

                                </CardSection>
                

                                <CardSectionScrollable>
                                    <CardList
                                        cards={searchedCards}
                                        addCardToSelection={addCardInDeck}
                                        displayStyle={displayStyle}
                                    />
                                </CardSectionScrollable>
                                
                            </Card>
                        </div>

                        <div class="py-3 pr-">
                            <Card title="Selection de cartes"> 
                                <div class="flex flex-row justify-center pb-4 ">
                                    <div class="flex flex-row border pr-7 rounded-r-3xl rounded-l-md border-gray-500">
                                        <DangerButton
                                            onClick={() => setCardDeck(new CardDeck([]))}
                                            text="Reset"
                                        />
                                        <h2 class=" text-center my-3 pl-2 text-xl">Nombre de cartes : {cardDeck.getNumberOfCards()}</h2>
                                    </div>
                                </div>

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

            </div>
        </>
    );
}


function DisplayPanel(props) {
    return (
        <div class="flex flex-row">
        <div class="border flex flex-row  rounded border-gray-500 rounded-xl">   
            <div class="px-5 border-r  border-gray-700  bg-gray-200 rounded-l-xl">
               <p class="my-auto">Mode d'affichage :</p> 
            </div>
            <div class="px-3"> 
                <ButtonWithIcon
                    onClick={() => props.setDisplayStyle("list")}
                    image={CardListIcon}
                    text="List"
                    customColor="blue"
                />
            </div>
            <div class="pl-3">
                <ButtonWithIcon
                    onClick={() => props.setDisplayStyle("grid")}
                    image={Grid_box}
                    text="Grid"
                />
            </div>
        </div>
    </div>
    )

}

export default MTGApp;