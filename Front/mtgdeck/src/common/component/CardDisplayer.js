import React from "react";

function CardDisplayer(props) {
    return (
        <div class="flex my-2 relative">
            <img src={props.card.img} alt={props.card.img} class="w-auto h-auto object-cover object-center rounded-lg shadow-md"/>
            <button onClick={() => props.addSelectedCards(props.card)}   class="
                text-center absolute bottom-0 left-0 h-12 w-12 inline-flex items-center mx-auto text-xl font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-700 hover:bg-gradient-to-br border border-gray-900 rounded-md ">
                <span class="mx-auto">+</span>
            </button>
        </div>        


    );
}

function CardDisplayerListView(props) {
    return (
        <div
            class="flex flex-row rounded-xl border-2 bg-gray-100 border border-gray-950 w-auto h-auto shadow-xl"
        >
            <img
                class="h-auto w-maw "
                src={props.card.img}
                alt="" 
            />
            <div class="flex flex-col justify-start p-6">
                <h5
                class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Name :  {props.card.name}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Descrition : {props.card.description}
                </p>
                <p class="text-xs text-neutral-500 dark:text-neutral-300">
                    <button onClick={() => props.addSelectedCards(props.card)}   class="
                    text-center  bottom-0 left-0 h-auto w-auto  p-1 text-xl font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-700 hover:bg-gradient-to-br  rounded-md ">
                        <span class="mx-auto">Ajouter</span>
                    </button>
                </p>
            </div>
        </div>
    )
}

export {CardDisplayer, CardDisplayerListView};