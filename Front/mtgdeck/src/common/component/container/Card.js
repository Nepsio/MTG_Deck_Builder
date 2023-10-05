import React from "react";
import eye from "../../../asset/svg/eye.png";

function Card(props) {
    const [displayBody, setDisplayBody] = React.useState(true);

    return (
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="flex flex-wrap text-sm font-medium px-9  text-gray-50 border-b border-gray-200 rounded-t-lg bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <h2 class=" text-center mx-auto my-3  text-xl">{props.title}</h2>
                <button onClick={() => setDisplayBody(!displayBody)} >
                    <img src={eye}   class="w-5 h-5"/> 
                </button>
            </div>
            { displayBody ?
                <div >
                    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        {props.children}    
                    </div>
                </div>
                    :
                 null
            }
            
        </div>
    );
}



export default Card;