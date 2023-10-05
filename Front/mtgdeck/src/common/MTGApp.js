import React from "react";
import Card from "./component/container/Card";
import SearchBar from "./component/SearchBar";
import CardDisplayer from "./component/CardDisplayer";


const CardList = (props) => {
    console.log(props.cards);
    let filteredCards = filterCardsWithImage(props.cards);
    console.log(filteredCards);
    return (
            <div class="grid grid-cols-5 gap-4">
                {filteredCards.map((card) => (
                    <CardDisplayer
                        image={card.img}
                    />
                ))}
            </div>
    );
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
        };
    }


    addNewSearchedCards = (cardData) => {
        this.setState(prevState => ({
            searchedCards: [...prevState.searchedCards, cardData],
        }));
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
                        <SearchBar
                            onSubmit={this.addNewSearchedCards}
                            resetSearchedCards={this.resetSearchedCards}
                            displayLoadingSpinner={this.setIsLoading}
                        />
                    </Card>

                    <Card title="Selection de cartes">
                        <CardList
                            cards={this.state.searchedCards}
                        />
                    </Card>
                </div>
            </>
        );
    }
}

export default MTGApp;