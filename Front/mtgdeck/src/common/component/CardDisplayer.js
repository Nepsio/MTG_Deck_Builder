import React from "react";

function CardDisplayer(props) {
    console.log(props.image);
    return (
        <div class="flex my-2 relative">
            <img src={props.image} alt={props.image} class="w-auto h-auto object-cover object-center rounded-lg shadow-md"/>
            <button onClick={() => props.addSelectedCards(props.card)}   class="
                text-center absolute bottom-0 left-0 h-12 w-12 inline-flex items-center mx-auto text-xl font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-700 hover:bg-gradient-to-br border border-gray-900 rounded-md ">
                <span class="mx-auto">+</span>
            </button>
        </div>        


    );


}

export default CardDisplayer;   