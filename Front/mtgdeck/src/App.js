import './App.css';
import React from 'react';
import MTGApp from './common/MTGApp';
import Footer from './common/Footer';
import { CardDeck} from './util/CardData';

import MTGStat from './pages/MTGStat';



function App() {
  const [page, setPage] = React.useState("DeckBuilder");
  const [deck, setDeck] = React.useState(new CardDeck([]));


  return (
      <>
        <div class="flex flex-col h-screen  w-screen  ">
          <div class=" flex-1 overflow-y-auto"> 
            {getCurrentPage(page, deck, setDeck)}
          </div>
          <Footer
            setPages={setPage}
          />
        </div>
         
      </>
  );
}

function getCurrentPage (pages, deck, setDeck) {
  switch (pages) {
    case "DeckBuilder":
      return <MTGApp deck={deck} setDeck={setDeck}/>;
    case "DeckStat":
      return <MTGStat deck={deck}/>;
    default:
      return <p>Page not found : {pages}</p>;
  }
}

export default App;
