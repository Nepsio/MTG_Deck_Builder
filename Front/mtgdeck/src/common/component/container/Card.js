import React from "react";

function Card(props) {
    return (
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <div class="flex flex-wrap text-sm font-medium  text-gray-50 border-b border-gray-200 rounded-t-lg bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <h2 class=" text-center mx-auto my-3  text-xl">{props.title}</h2>
            </div>
            <div>
                <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                    {props.children}    
                </div>
            </div>
        </div>
    );
}



export default Card;