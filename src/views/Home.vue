<template>
  <div class="">

    
    <div class="container mt-5 pt-5">
      
      <!--<div style="background-color:#fff" class=" mb-4">
        <form @submit.prevent="searchMovies($store.state.query)">
          <div class="d-flex justify-content-center">
            <div class="form-group col-lg-3">
              <label for="">Pelicula:</label>
              <input type="text" class="form-control" v-model="$store.state.query">
            </div>
          </div>
        </form>
      </div>-->
      
     
      <div >
        <div class="row">
            <div v-for="(movie, index) in searchM.results" :key="index" class="col-lg-3 col-md-4 col-12 ">
                <div class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto"
                    :src="movie.poster_path" style="height: ;" alt="">
                    <!--{{searchM.total_pages }} -- {{total_pagesS}}-->
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="movieLike(index)" >
                        <font-awesome-icon icon="heart"></font-awesome-icon></button>
                        
                         <router-link  class="btn btn-outline-primary mx-3" :to="{name:'details', params: {id:movie.id} }"><font-awesome-icon icon="info"></font-awesome-icon></router-link>
                    </div>
                </div>
            </div>
        </div>

    
        <!--<router-link :to="{name:'home', params:{page:n} }" v-for="(n, index) of total_pagesS" :key="index">
            <button class="btn btn-sm" 
            :class="{'btn-outline-primary': n!= pageS,
            'btn-primary': n == pageS}" 
            @click="setPageSearch(n)" >{{n}}</button>
       
        </router-link>-->
        <!--<nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>-->
      </div>
      <div  >
        <movies/>
      </div>

     

     
      

    </div>
    
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex"
import movies from"@/components/Movies.vue"

export default {
components: {
    movies
  },
  computed:{
        ...mapState(["like", "movies","page","total_pages","pageS","total_pagesS","query","searchM","movieDetails"])
    },
  methods:{
    ...mapActions(["getPopularMovies","searchMovies","setPageSearch","getDetails"]),
    ...mapMutations(["imgContainer"])
  },
}
</script>
