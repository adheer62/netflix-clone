const APIKEY = "d2af374d03b2112d4255086ebb152d3e";

const requests={
   
   fetchNetFlixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
   fetchTreding:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
   fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
   fetchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
   fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;
