function ButtonWithIcon(props) {
  const buttonColorClass = getButtonStyleClass(props.buttonType);

  return (
    <button 
        type="button" 
        class={` text-white ${buttonColorClass}  pr-5 font-medium rounded-lg text-sm text-center inline-flex items-center  `}
        onClick={props.onClick}
    >
        <div class="px-5">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={props.viewBox}>
              <path fillRule="evenodd" d={props.svgDescription} clipRule="evenodd"/>
          </svg>
        </div>
        <p class="text-white pl-1  border-blue-900 py-2.5 px-">
            {props.text}
        </p>
    </button>
  );
}

function IconButton(props) {
  const buttonColorClass = getButtonStyleClass(props.buttonType);
  return ( 
    <button 
        type="button" 
        class={` text-white ${buttonColorClass}   font-medium rounded-lg text-sm text-center inline-flex items-center  `}
        onClick={props.onClick}
    >
        <div class="px-5">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={props.viewBox}>
              <path fillRule="evenodd" d={props.svgDescription} clipRule="evenodd"/>
          </svg>
        </div>
    </button>  
  );
}

function Button(props) {
  const buttonColorClass = getButtonStyleClass(props.buttonType);
  return (
    <button
      type="button"
      class={` ${buttonColorClass} text-white font-bold py-2 px-4 rounded`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function getButtonStyleClass(buttonType) {
    switch (buttonType) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700";
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700";
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "danger":
        return "bg-red-600 hover:bg-red-700";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700";
      case "info":
        return "bg-indigo-600 hover:bg-indigo-700";
      case "light":
        return "bg-gray-100 hover:bg-gray-200";
      case "dark":
        return "bg-gray-800 hover:bg-gray-900";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  }

export  {ButtonWithIcon, Button , IconButton};