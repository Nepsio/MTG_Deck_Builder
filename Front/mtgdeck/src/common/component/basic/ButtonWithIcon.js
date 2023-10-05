function ButtonWithIcon(props) {
  return (
    <button 
        type="button" 
        class="text-white bg-blue-600  font-medium rounded-lg text-sm 
          text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-9 mb-2"
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