import React from "react";
import loupe from "../../asset/svg/loupe.png";
import axios from "axios";
import  {CardDataIndexor, CardDeck} from "../../util/CardData";
import mockData from "../../mockData/mockCardData";


/**
 * Composant représentant la barre de recherche de carte
 * @param {*} props :
 * - onSubmit : La fonction à appeler lors de la soumission du formulaire
 * - resetSearchedCards : La fonction permettant de réinitialiser les cartes recherchées
 * - displayLoadingSpinner : La fonction permettant d'afficher ou non le spinner de chargement
 * - cardData : Les données de la carte
 * - cardDeck : Le deck de carte
 */
function SearchBar(props) { 
    const [userName, setUserName] = React.useState('');
    const usernameInputRef = React.useRef();
    const handleChange = event => {
        setUserName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.resetSearchedCards();
        props.displayLoadingSpinner(true);
        
        let cardData = mockData;

        try  {
            const resp = await axios.get(`https://api.scryfall.com/cards/search?q=${userName}`);
            props.displayLoadingSpinner(false);
            console.log(resp.data.da);
            cardData = resp.data.data
        } catch (error) {
            console.error(error);
        }

        for (var i = 0; i < cardData.length; i++) {
            let currenrCard = cardData[i];
            if (currenrCard.image_uris != undefined) {
                let carte  = new CardDataIndexor(cardData[i]);
                console.log(carte);
                props.onSubmit(carte.getCardData("English"));
            }
        }
    }


    return (
        <>
            <div >
                <form class="flex" onSubmit={handleSubmit}>
                    <button class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200  hover:bg-gray-300 border border-r-0 border-gray-500 rounded-l-xl dark:bg-gray-600">
                        <img src={loupe} alt="loupe" class="w-4 h-4" />
                    </button>
                    <input
                        type="text"
                        class="rounded-none rounded-r-lg bg-gray-50 border border-gray-500  text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Nom de la carte"
                        id="inlineFormInputGroupUsername" 
                        ref={usernameInputRef} required
                        onChange={handleChange}
                        value={userName}    
                    />
                </form>
            </div>
        </>
    )

}

export default SearchBar;