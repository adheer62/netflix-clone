import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Banner from './Banner';
import requests from './request';
import Row from './Row.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetFlixOriginals}
      />
      <Row
         title="Trending Now"
         fetchUrl={requests.fetchTreding}
      />
      <Row 
         title ="Top Rated"
         fetchUrl={requests.fetchTopRated}
      />
      <Row
         title ="Action Movies"
         fetchUrl={requests.fetchActionMovies}
      />
      <Row 
         title ="Horror Movies"
         fetchUrl={requests.fetchHorroMovies}
      />
      <Row
         title ="Comedy Movies"
         fetchUrl={requests.fetchComedyMovies}
      />   
      <Row
         title ="Romance Movies"
         fetchUrl={requests.fetchRomanticMovies}
      />
      <Row
         title ="Documentaries"
         fetchUrl={requests.fetchDocumentaries}
         
      />
    </div>
  );
}

export default App;
