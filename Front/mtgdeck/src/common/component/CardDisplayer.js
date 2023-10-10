import React from "react";
import gear from "../../asset/svg/gear.png";

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


function CardDisplayerDeck(props) {
    return (
        <div class="bg-black flex my-2 relative flex-col border border-2 border-black  rounded-xl border-t-0">
            <img src={props.card.img} alt={props.card.img} class="w-auto h-auto object-cover object-center rounded-lg shadow-md "/>
            <div class="bg-gradient-to-tr from-gray-300 to-gray-500  shadow-inner border-0 border-black  rounded-xl border-t-0 ">
                <div class="m-2  flex flex-row justify-center ">
                    <button onClick={() => props.addSelectedCards(props.card)}   class="
                        text-center  px-3  h-auto w-auto inline-flex items-center placeholder: text-xl font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-700 hover:bg-gradient-to-br border border-gray-900 rounded-l-3xl ">
                        <span class="mx-auto">+</span>
                    </button>

                    <input
                        type="text"
                        value={""+props.count}
                        class=" bg-gray-50 border border-gray-300 text-gray-900 block max-w-1  min-w-0  text-sm p-2.5" 
                    />
                    

                    <button onClick={() => props.removeCardInDeck(props.card)}   class="
                        text-center px-3  h-auto w-auto inline-flex items-center  text-xl font-bold text-white bg-gradient-to-r from-red-400 via-red-500 to-red-700 hover:bg-gradient-to-br border border-gray-900 rounded-r-3xl ">
                        <span class="mx-auto">-</span>
                    </button>
                </div>
            </div>
            
        </div>        


    );
}


function CardDeckDisplayerListView(props) {
    return (
        <div class="flex flex-row">
            <div class="border grid grid-cols-5  h-rounded border-gray-500 rounded-l-full  rounded-r-full">   
                <div>
                    <img src={props.card.croppedImg} alt={props.card.croppedImg} class="rounded-l-full h-full rounded-xl border border-gray-700  "/>
                </div>

                <div class="px-5 col-span-3 my-auto ²">
                    <p class="text-xs text-center">{props.card.name}</p>
                </div>

                <div class='border  border-l-gray-700 rounded-r-full  bg-gray-300 ' >
                    <div class='text-center' >
                            {props.count}
                    </div>
                </div>

            </div>
        </div>
        );
}

function CardDisplayerListView(props) {
    return (
        <div
            class="flex flex-row rounded-xl border-2 bg-gray-100 border border-gray-950 w-auto h-auto shadow-xl ms:flex-col" 
        >   
            
            <img
                class="h-auto w-max bg-black rounded-l-md"
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

export {CardDisplayer, CardDisplayerListView, CardDisplayerDeck, CardDeckDisplayerListView};