import React from "react";
import Card from "./component/container/Card";
import SearchBar from "./component/SearchBar";
import {CardDisplayer, CardDisplayerListView} from "./component/CardDisplayer";
import ButtonWithIcon from "./component/basic/ButtonWithIcon";
import Grid_box from "../asset/svg/Grid_box.svg";


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

class MTGApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedCards: [],
            isLoading: false,
            selectedCards: [],
            displayStyle: "list",
        };
    }


    addNewSearchedCards = (cardData) => {
        this.setState(prevState => ({
            searchedCards: [...prevState.searchedCards, cardData],
        }));
    }

    addSelectedCards = (cardData) => {
        this.setState(prevState => ({
            selectedCards: [...prevState.selectedCards, cardData],
        }));
    }

    setDisplayStyle = (style) => {
        this.setState({displayStyle: style});
    }



    resetSearchedCards = () => {
        this.setState({ searchedCards: [] });
    };

    setIsLoading = (isLoading) => {
        this.setState({isLoading: isLoading});
    }

    render() {
        return (
            <>
                <div class="m-5">
                    <Card title="Formulaire de recherche">

                        <div class="flex flex-row">
                            <div class="px-5">
                                Mode d'affichage :
                            </div>
                            <ButtonWithIcon
                                onClick={() => this.setDisplayStyle("list")}
                                image={Grid_box}
                                text="List"
                            />
                            <ButtonWithIcon
                                onClick={() => this.setDisplayStyle("grid")}
                                image={Grid_box}
                                text="Grid"
                            />
                        </div>

                        <SearchBar
                            onSubmit={this.addNewSearchedCards}
                            resetSearchedCards={this.resetSearchedCards}
                            displayLoadingSpinner={this.setIsLoading}
                        />
                    </Card>


                    <div class="py-5">
                        <Card title="Resultat de la recherche">
                            <CardList
                                cards={this.state.searchedCards}
                                addCardToSelection={this.addSelectedCards}
                                displayStyle={this.state.displayStyle}
                            />
                        </Card>
                    </div>

                    <div class="py-5">
                        <Card title="Selection de cartes">
                            <CardList
                                cards={this.state.selectedCards}
                                displayStyle={this.state.displayStyle}

                            />
                        </Card>
                    </div>

                </div>
            </>
        );
    }
}

export default MTGApp;