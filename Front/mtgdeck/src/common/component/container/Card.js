import React from "react";
import eye from "../../../asset/svg/eye.png";

function Card(props) {
    const [displayBody, setDisplayBody] = React.useState(true);

    return (
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow max-h-screen  dark:bg-gray-800 dark:border-gray-700">
           <div class="flex flex-wrap text-sm font-medium px-9  text-gray-50 border-b border-gray-200 rounded-t-lg bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <h2 class=" text-center mx-auto my-3  text-xl">{props.title}</h2>
                <button onClick={() => setDisplayBody(!displayBody)} >
                    <img src={eye}   class="w-5 h-5"/> 
                </button>
            </div>
            { displayBody ?
                <div >
                    <div class="p-4 bg-white rounded-lg md:p-8  dark:bg-gray-800 "  role="tabpanel" >
                        <div class="max-h-screen  ">
                            {props.children}
                        </div>  
                    </div>
                </div>
                    :
                 null
            }
            
        </div>
    );
}


function CardSection(props) {
    return  (
            <div class="m-5">
                {props.children}
            </div>
    );
}

function CardSectionScrollable(props) {
    const  existChild = props.children != null;
    return (
        existChild ?
            <div class="flex flex-row justify-center pb-4  ">
                <div class="flex flex-row border p-7 rounded-3xl  border-gray-500 max-h-screen overflow-y-auto">
                    {props.children}
                </div>
            </div>
        :
            null
    );
}



export {Card, CardSection, CardSectionScrollable};