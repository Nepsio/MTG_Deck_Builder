import React from "react";
import {Card, CardSection, CardSectionScrollable} from "./component/container/Card";
import SearchBar from "./component/SearchBar";
import {CardDisplayer, CardDisplayerListView, CardDisplayerDeck, CardDeckDisplayerListView} from "./component/CardDisplayer";
import {ButtonWithIcon, Button, IconButton} from "./component/basic/Button";
import Grid_box from "../asset/svg/Grid_box.svg";
import CardListIcon from "../asset/svg/CardListIcon.png";
import { CardDeck} from "../util/CardData";
import { Fade } from 'react-awesome-reveal';
import ManaPicker from "./component/pageComponent/mtgApp/ManaPicker";

/**
 * Component permettant d'afficher la liste des cartes du deck
 * @param {*} props : 
 * - cards : La liste des cartes du deck
 * - displayStyle : Le style d'affichage des cartes
 * - addCardToSelection : La fonction permettant d'ajouter une carte à la sélection
 * - removeCardInDeck : La fonction permettant de supprimer une carte du deck
 */
const DeckList = (props) => {
    console.log(props.cards);
    const [modalIsDisplayed, setModalIsDisplayed] = React.useState(false);
    return (
        <div class="grid grid-cols-1 gap-4">
            {props.cards.map((card) => (
                    <CardDeckDisplayerListView
                        card = {card.cardData}
                        count = {card.quantity}
                        addSelectedCards={props.addCardToSelection}
                        removeCardInDeck={props.removeCardInDeck}
                        setModalIsDisplayed={setModalIsDisplayed}
                        modalIsDisplayed={modalIsDisplayed}
                    />
            ))}
        </div>
    );

}

/**
 * Component permettant d'afficher la liste des cartes
 * @param {*} props :
 * - cards : La liste des cartes
 * - displayStyle : Le style d'affichage des cartes
 * - addCardToSelection : La fonction permettant d'ajouter une carte à la sélection
 * @returns 
 */
const CardList = (props) => {
    let filteredCards = filterCardsWithImage(props.cards);
    if (props.displayStyle == "list") {
        return (
            <div class="grid grid-cols-1 gap-4">
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
                    <Fade delay={250} triggerOnce > 
                        <CardDisplayer
                            card = {card}
                            addSelectedCards={props.addCardToSelection}
                        />
                    </Fade>
                ))}
            </div>
        );
    }
}

/**
 * Filtre les cartes qui n'ont pas d'image
 * @param {*} cards Liste de cartes à afficher
 * @returns 
 */
function filterCardsWithImage(cards) {
    let res = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].img != null) {
            res.push(cards[i]);
        }
    }
    return res;
}

/**
 * Component permettant de construire un deck
 * @param {*} props 
 * @returns 
 */
function MTGApp(props)  {

    const [searchedCards, setSearchedCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [selectedCards, setSelectedCards] = React.useState([]);
    const [displayStyle, setDisplayStyle] = React.useState("grid");

    const addNewSearchedCards = (cardData) => { 
        searchedCards.push(cardData);
        setSearchedCards(searchedCards);
    }

    const addCardInDeck = (cardData) => {
        console.log(cardData);
        props.deck.addCardInDeck(cardData);
        props.setDeck(new CardDeck(props.deck.getCardList()));
    }

    const removeCardInDeck = (cardData) => {
        props.deck.removeCardInDeck(cardData);
        props.setDeck(new CardDeck(props.deck.getCardList()));
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

                        <div class="py-3 xl:col-span-2  md:col-span-2 sm:col-span-1 md:pr-10">
                            <DatabaseQueryCard 
                                setDisplayStyle={setDisplayStyle}
                                displayStyle={displayStyle}
                                onSubmit={addNewSearchedCards}
                                resetSearchedCards={resetSearchedCards}
                                displayLoadingSpinner={setIsLoading}
                                cards={searchedCards}
                                addCardToSelection={addCardInDeck}
                            />
                        </div>

                        <div class="py-3">
                            <Card title="Deck"> 
                                <div class="flex flex-row justify-center pb-4 ">
                                    <div class="flex flex-row border pr-7 rounded-r-3xl rounded-l-xl border-gray-500">
                                        <IconButton
                                            onClick={() => props.setDeck(new CardDeck([]))}
                                            buttonType = "danger"
                                            svgDescription = "M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H2zm3 9H4V7h1v7zm2 0H6V7h1v7zm2 0H8V7h1v7zm2 0h-1V7h1v7zM13.25 2H10V.75A.753.753 0 009.25 0h-3.5A.753.753 0 005 .75V2H1.75a.752.752 0 00-.75.75V4h13V2.75a.752.752 0 00-.75-.75zM9 2H6v-.987h3V2z"
                                            viewBox = "0 0 16 16"
                                        />
                                        <h2 class=" text-center my-3 pl-2 text-xl">Nombre de cartes : {props.deck.cardNumber}</h2>
                                    </div>
                                </div>

                                <DeckList
                                    cards={props.deck.deck}
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

/**
 * Card permettant de faire une recherche dans la base de données
 * @param {*} props 
 * @returns 
 */
function DatabaseQueryCard(props)  {
    return (
        <Card title="Data Base">

        <CardSection>
            <DisplayPanel
                setDisplayStyle={props.setDisplayStyle}
            />

            <div class="py-5">
                <SearchBar
                    onSubmit={props.onSubmit}
                    resetSearchedCards={props.resetSearchedCards}
                    displayLoadingSpinner={props.displayLoadingSpinner}
                />

                <ManaPicker
                    addCardToSelection={props.addCardToSelection}
                />
            </div>

        </CardSection>


        <CardSectionScrollable>
            <CardList
                cards={props.cards}
                addCardToSelection={props.addCardToSelection}
                displayStyle={props.displayStyle}
            />
        </CardSectionScrollable>
        
    </Card>
        
    )

}

/**
 * Composant permettant de changer le style d'affichage des cartes
 * @param {*} props 
 * @returns 
 */
function DisplayPanel(props) {
    return (
        <div class="flex flex-row justify-center">
            <div class="px-3"> 
                <ButtonWithIcon
                    onClick={() => props.setDisplayStyle("list")}
                    image={CardListIcon}
                    text="List"
                    svgDescription = "M6 1h10v2H6V1zm0 6h10v2H6V7zm0 6h10v2H6v-2zM0 2a2 2 0 113.999-.001A2 2 0 010 2zm0 6a2 2 0 113.999-.001A2 2 0 010 8zm0 6a2 2 0 113.999-.001A2 2 0 010 14z"
                    viewBox = "0 0 16 16"
                />
            </div>
            <div class="pl-3">
                <ButtonWithIcon
                    onClick={() => props.setDisplayStyle("grid")}
                    image={Grid_box}
                    text="Grid"
                    svgDescription = "M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"
                    viewBox = "0 0 16 16"
                />
            </div>
        </div>
    )

}

export default MTGApp;