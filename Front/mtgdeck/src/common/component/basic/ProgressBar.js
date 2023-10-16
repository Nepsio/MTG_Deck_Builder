import React from "react";


function ProgressBar(props) {
    return (
        <div class="grid grid-cols-3">
            <div class=" ">{props.label}</div>
            <div class="col-span-2 w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-blue-600  text-xs font-medium text-blue-100 h-full text-center p-0.5 leading-none rounded-full" 
                    style={ props.progress > 0 ?  { width:  `${props.progress}%`} : { display: 'none'} }
                >
                    <p class="pt-1">{props.progress+' %'}</p>
                </div>
            </div>
        </div>

    );
    

}

export default ProgressBar;