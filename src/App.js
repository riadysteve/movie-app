import React from "react";
import "./App.css";

import requests from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetlixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
