import React from "react";
import { Slide, Fade} from 'react-awesome-reveal';




function CardDisplayer(props) {
    return (
        <div class=" my-2  hover:shadow-2xl rounded-xl hover:shadow-blue-700" onClick={() => props.addSelectedCards(props.card)} >
            <img src={props.card.img} alt={props.card.img} class="w-auto h-auto object-cover object-center rounded-lg shadow-md"/>
            
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

    const [isHovering, setIsHovering] = React.useState(false);

    const [displayModal, setDisplayModal] = React.useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div class="flex flex-row"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >

            {displayModal && (
                <ModalView
                    card={props.card}
                    setDisplayModal={setDisplayModal}
                />
            )}
            <div class="border grid grid-cols-5  h-rounded border-gray-500 rounded-l-full  rounded-r-full">   
                <div>
                    <img src={props.card.croppedImg} alt={props.card.croppedImg} class="rounded-l-full h-full rounded-xl border border-gray-700  "/>
                </div>

                <div class="px-5 col-span-3 my-auto relative">
                    <p class="text-xs text-center">{props.card.name}</p>
                    
                    

                    { (isHovering && !props.modalIsDisplayed) && ( 
                        
                        <div class="absolute inset-y-0 right-2 ">
                            <button onClick={() => props.addSelectedCards(props.card)}   class="
                                text-center  px-3  h-auto w-auto inline-flex items-center placeholder: text-xl font-bold text-white bg-gray-500 hover:bg-gray-600 border opacity-50  ">
                                <span class="mx-auto">+</span>
                            </button>

                            <button onClick={() => props.removeCardInDeck(props.card)}   class="
                                text-center px-3  h-auto w-auto inline-flex items-center  text-xl font-bold text-white bg-gray-500 hover:bg-gray-600 border opacity-50  ">
                                <span class="mx-auto">-</span>
                            </button>

                            <button 
                                onClick={() => {
                                    setDisplayModal(true) 
                                    props.setModalIsDisplayed(true)
                                }}
                                class="text-center px-3  h-auto w-auto inline-flex items-center  text-xl font-bold text-white rounded-full bg-blue-500 hover:bg-blue-600 border opacity-50  ">
                                    <span class="mx-auto">i</span>
                            </button>
                        </div>

                    ) }
                
                </div>
                
                {displayModal && (
                    <ModalView
                        card={props.card}
                        setDisplayModal={setDisplayModal}
                        setModalIsDisplayed={props.setModalIsDisplayed}
                    />
                )}
                

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
            class="grid grid-cols-2 rounded-xl border-2 bg-gray-100 border border-gray-950 shadow-xl " 
        >   
            
            <img
                class="h-auto w-auto bg-black rounded-l-md"
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

function ModalView(props) {
    return (
        <>  
            <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class=" bg-gray-700 bg-opacity-80 fixed top-8 left-0 right-0 z-1000   w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  h-full">
                <div class="relative w-full max-w-full max-h-full">
                    <div class="relative  dark:bg-gray-700 mx-10 my-auto">
                        <div class="flex items-start justify-between p-4  rounded-t">
                            <button type="button" class="text-yellow-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal"
                                onClick={() => {
                                    props.setDisplayModal(false)
                                    props.setModalIsDisplayed(false)
                                }}
                            >
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-3">
                            <Slide direction="left" triggerOnce>
                                <img src={props.card.img} alt={props.card.img} class="w-72 col-span-1 h-auto object-cover object-center  rounded-2xl shadow-md"/>
                            </Slide>


                            <div class="col-span-2 mx-32">
                                <h1 class="text-center pb-5 text-3xl text-gray-200">{props.card.name}</h1>
                                <ModalTextSection label="Type" value={props.card.type}/>
                                <ModalTextSection label="Description" value={props.card.description}/>
                            </div>
                            
                        </div>
                                                
                        
                    </div>
                </div>
            </div>
        </>
    )
}

function ModalTextSection(props) {
    return (
        <div class="my-8">
                <Fade direction="up" triggerOnce>
                    <div class="grid grid-cols-3 my-8">
                        <p class="text-yellow-500 col-span-1">{props.label+" : "}</p>
                        <p class="text-sm text-gray-200 col-span-2 dark:text-gray-400">
                            {props.value}
                        </p>
                    </div>
                </Fade>
        </div>
    )
}

export {CardDisplayer, CardDisplayerListView, CardDisplayerDeck, CardDeckDisplayerListView};    