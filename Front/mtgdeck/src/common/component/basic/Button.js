function ButtonWithIcon(props) {
  return (
    <button 
        type="button" 
        class="text-white bg-blue-600 hover:bg-blue-700   font-medium rounded-lg text-sm 
          text-center inline-flex items-center  "
        onClick={props.onClick}
    >
        <div class="px-5">
            <img 
                src={props.image}
                alt="triangle with all three sides equal"
                className="w-5 h-5"
            />
        </div>
        <p class="text-white pl-5 border-l-2 border-blue-900 py-2.5 px-9">
            {props.text}
        </p>
    </button>
  );
}

function DangerButton(props) {
  return (
    <button
      type="button"
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}


export  {ButtonWithIcon, DangerButton};