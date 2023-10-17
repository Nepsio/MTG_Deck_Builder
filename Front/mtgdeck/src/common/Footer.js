import React from "react";

function Footer (props) {
    const [activePage, setActivePage] = React.useState("DeckBuilder");


    return (
        <footer class="sticky z-50 bg-gray-800 bottom-0  ">
            <div class="flex space-x-5 justify-center md:mt-0">
                <SVGButton 
                    viewBox="0 0 576 512"
                    svgDescription = "M0 24C0 10.7 10.7 0 24 0h72c11.5 0 21.4 8.2 23.6 19.5L122 32h190v102.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V32h181.7c21.2 0 36.5 20.3 30.8 40.7l-54 192c-3.9 13.8-16.5 23.3-30.8 23.3h-317l9.1 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H160c-11.5 0-21.4-8.2-23.6-19.5L76.1 48H24C10.7 48 0 37.3 0 24zm224 440c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm240 48c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                    setPages={() => setCurrentPage("Purchase", props.setPages, setActivePage)}
                    isActive = {activePage === "Purchase"}
                />
                <SVGButton 
                    viewBox="0 0 24 24"
                    svgDescription ="M21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61m-19.5 3.7L6.93 20a2.01 2.01 0 001.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79.01-.26-.04-.55-.13-.81L13 3.5a1.954 1.954 0 00-1.81-1.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 00-1.09 2.6m16.15-3.8a2 2 0 00-2-2h-1.45l3.45 8.34"
                    setPages={() => setCurrentPage("DeckBuilder", props.setPages, setActivePage)}
                    isActive = {activePage === "DeckBuilder"}
                />
                <SVGButton 
                    viewBox="0 0 16 16"
                    svgDescription ="M0 0h1v15h15v1H0V0zm14.817 11.887a.5.5 0 00.07-.704l-4.5-5.5a.5.5 0 00-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 00-.808.588l4 5.5a.5.5 0 00.758.06l2.609-2.61 4.15 5.073a.5.5 0 00.704.07z"
                    setPages={() => setCurrentPage("DeckStat", props.setPages, setActivePage)}
                    isActive = {activePage == "DeckStat"}
                />
        </div>
        </footer>
    )
}

function SVGButton(props) {
    const activeClass = props.isActive ? "bg-blue-500 p-3 border-b-yellow-400 shadow-inner border-b-2" : "";
    return (
        <a href="#" className={`text-gray-300 hover:text-gray-100 dark:hover:text-white p-3 shadow-inner ${activeClass}`} onClick={props.setPages}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={props.viewBox}>
                <path fillRule="evenodd" d={props.svgDescription} clipRule="evenodd"/>
            </svg>
        </a>
    );
}



function setCurrentPage (page, setPages, setActivePage ) {
   setPages(page);
    setActivePage(page); 
}

export default Footer;