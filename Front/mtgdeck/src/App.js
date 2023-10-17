import './App.css';
import React from 'react';
import MTGApp from './common/MTGApp';
import Footer from './common/Footer';


function App() {
  const [page, setPage] = React.useState("DeckBuilder");

  return (
      <>
        <div class="flex flex-col h-screen  w-screen  ">
          <div class=" flex-1 overflow-y-auto"> 
            {getCurrentPage(page)}
          </div>
          <Footer
            setPages={setPage}
          />
        </div>
         
      </>
  );
}

function getCurrentPage (pages) {
  switch (pages) {
    case "DeckBuilder":
      return <MTGApp/>;
    default:
      return <p>Page not found : {pages}</p>;
  }
}

export default App;
