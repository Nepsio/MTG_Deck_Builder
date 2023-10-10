import React from "react";
import loupe from "../../asset/svg/loupe.png";
import axios from "axios";
import  {CardDataIndexor, CardDeck} from "../../util/CardData";


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
        
        const resp = await axios.get(`https://api.scryfall.com/cards/search?q=${userName}`);


        
        props.displayLoadingSpinner(false);
        const cardData = resp.data.data;
        for (var i = 0; i < cardData.length; i++) {
            let cardData = new CardDataIndexor(resp.data.data[i]);
            props.onSubmit(cardData.getCardData("English"));
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