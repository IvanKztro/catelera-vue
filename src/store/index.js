import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APIKEY = "67e32c1cecc6e0d2832701765bea5437";
const BASEURL = "https://api.themoviedb.org/3/";

export default new Vuex.Store({
  state: {
    movies: [],
    page: 1,
    total_pages: null,
    query: "1917",
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
      //context.state.movies.like= !context.state.like;
      context.state.movies.forEach( (element, index) => {
       if(index == indexR){
        context.state.movies[index].like= !element.like;
        console.log(context.state.movies[index])
       }
        //element.like = !element.like;
        
      });
     // alert(context.state.movies.like);
    },
    setPage(context, page){
      //alert("asasasas");
      
      context.state.page = page
      console.log(context.state.page);
      context.dispatch("getPopularMovies")
    },
    getPopularMovies: async function(context){
      const url = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${context.state.page}&language=es-MX`;
      console.log(url)
      let json = await fetch(url);
      let moviesPopular = await json.json();
      context.state.page = moviesPopular.page
      context.state.total_pages = moviesPopular.total_pages
     console.log(moviesPopular)
      moviesPopular.results.map(m => {
        m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
        m.like = false;
      });
      context.state.movies = moviesPopular.results
      console.log(context.state.movies);
    },
    searchMovies: async function(context,query){
      
      let url = `${BASEURL}search/movie?api_key=${APIKEY}&language=es-MX&query=${query}`;
      console.log(url)
      let json = await fetch(url);
      let busquedad = await json.json();
      busquedad.results.map(m => {
      //console.log();
      if(m.poster_path == null)
      {
        m.poster_path = "img/none.jpg"
      }else{
        m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
      }
       
        m.like = false;
      });
      context.state.searchM =  busquedad;
      console.log(busquedad)
    }
  },
  modules: {
  }
})
