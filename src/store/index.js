import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router/index.js"

Vue.use(Vuex)

const APIKEY = "67e32c1cecc6e0d2832701765bea5437";
const BASEURL = "https://api.themoviedb.org/3/";

export default new Vuex.Store({
  state: {
    movies: [],
    moviesFav:[],
    contMovieFav: 0,
    page: 1,
    total_pages: null,
    pageS: 1,
    total_pagesS: null,
    query: "",
    movieDetails:{},
    APIKEY : "67e32c1cecc6e0d2832701765bea5437",
    BASEURL : "https://api.themoviedb.org/3/",
    searchM:{

    }
  },
  mutations: {
    likeIt(state){
      !state.like;
    },
    imgContainer(context, url){
      let dar = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+url;
      console.log(dar)
      return dar
    }
  },
  props:{
    like:{
      type: Boolean,
			required: true,
			default: false
    }
  },
  actions: {
    movieLike(context, indexR){
      context.state.movies.forEach( (element, index) => {
       if(index == indexR){


          context.state.movies[index].like= !element.like;
          context.state.moviesFav.push({
          id: element.id,
          backdrop_path: `https://image.tmdb.org/t/p/w1400_and_h450_face${element.backdrop_path}`,
          homepage: element.homepage,
          overview: element.overview,
          poster_path: element.poster_path,
          release_date: element.release_date,
          title: element.title,
          vote_average: element.vote_average,
          like: true
        });
          localStorage.setItem("movieFav", JSON.stringify(context.state.moviesFav) )
          context.state.contMovieFav =  context.state.moviesFav.length;
       }
        
      });
    },
    deleteFav(context, index){
      context.state.moviesFav.splice(index,1);
      context.state.contMovieFav -= 1;
      localStorage.setItem("movieFav", JSON.stringify(context.state.moviesFav) )
      
    },
    getMoviesFav(context){
      let moviesF = JSON.parse(localStorage.getItem("movieFav"))
      if(moviesF != null){
        context.state.moviesFav= JSON.parse(localStorage.getItem("movieFav"))
      }
      context.state.contMovieFav =  context.state.moviesFav.length;
      
    },
    setPageTotal(context, page){
      context.state.page = page
      context.dispatch("getPopularMovies")
    },
    setPageSearch(context, page){
      context.state.pageS = page
      context.dispatch("getPopularSearching")
    },
    getPopularMovies: async function(context){
      const url = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${context.state.page}&language=es-MX`;
      let json = await fetch(url);
      let moviesPopular = await json.json();
      context.state.page = moviesPopular.page
      context.state.total_pages = moviesPopular.total_pages
      moviesPopular.results.map(m => {
      m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
      m.like = false;
      });
      context.state.movies = moviesPopular.results
    },
    getPopularSearching: async function(context){
      //const url = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${context.state.pageS}&language=es-MX`;
      const url = `${BASEURL}search/movie?api_key=${APIKEY}&language=es-MX&page=${context.state.pageS}&query=${context.state.query}`
      let json = await fetch(url);
      let moviesSearching = await json.json();
      context.state.pageS = moviesSearching.page
      context.state.total_pagesS = moviesSearching.total_pages
      moviesSearching.results.map(m => {
      m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
      m.like = false;
      });
      context.state.searchM = moviesSearching
    },
    searchMovies: async function(context,query){
      //console.log("query: "+query)
      if(query == "")
      {
       // console.log("vaciiooooo")
        context.state.searchM= {}
        context.dispatch("getPopularMovies")
      }else{
        let url = `${BASEURL}search/movie?api_key=${APIKEY}&language=es-MX&query=${query}`;
        let json = await fetch(url);
        let busquedad = await json.json();
        //console.log(busquedad)
        context.state.total_pagesS = busquedad.total_pages
        busquedad.results.map(m => {
        if(m.poster_path == null)
        {
          m.poster_path = "img/none.jpg"
        }else{
          m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
        }
          m.like = false;
        });
        context.state.searchM =  busquedad;

      }
    },
    getDetails: async (context) =>{
     // console.log("route.params.id");
      console.log(router.currentRoute.params.id)
      //this.$router.push({ name: 'home'})
      //this.$route.get("/details/:id");
      //console.log(this.$router.params);
      
      let apiConfig = `?api_key=${APIKEY}`;
      let json = await fetch(`${BASEURL}movie/${router.currentRoute.params.id}${apiConfig}&language=es-MX`)
      let movie = await json.json();
     // console.log(movie);
        movie.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`;
        movie.backdrop_path = `https://image.tmdb.org/t/p/w1400_and_h450_face${ movie.backdrop_path}`
   
      //console.log(movie);
      context.state.movieDetails = movie;
      console.log(context.state.movieDetails)
      console.log(  Object.keys(context.state.movieDetails).length  )
      
    }

  },
  modules: {
  }
})
