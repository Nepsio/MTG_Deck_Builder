function ButtonWithIcon(props) {
  return (
    <button 
        type="button" 
        class="text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 hover:bg-gradient-to-br   font-medium rounded-lg text-sm 
          text-center inline-flex items-center  mr-9 mb-2"
        onClick={props.onClick}
    >
        <div class="px-5">
            <img 
                src={props.image}
                alt="triangle with all three sides equal"
                className="w-5 h-5  "
            />
        </div>
        <p class="text-white pl-5 border-l-2 border-blue-900 py-2.5 px-9">
            {props.text}
        </p>
    </button>
  );
}


export default ButtonWithIcon;