<template>
  <div class="">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand"><img src="img/logo.png" class="" style="height: 3.5rem" alt=""></a>
        <form class="form-inline" @submit.prevent="searchMovies($store.state.query)">

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" style="color: #428bca"></i></span>
            </div>
            <input class="form-control mr-sm-2" type="search" placeholder="Ingrese pelicula" v-model="$store.state.query">
          </div>
          
          <button class="btn btn-outline-primary my-2 my-sm-0" >Buscar</button>

          
        </form>
    </nav>
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
      

      <div v-if="Object.keys(searchM).length > 0">
        <div class="row">
            <div v-for="(movie, index) in searchM.results" :key="index" class="col-lg-3 col-md-4 col-12 ">
                <div class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto"
                    :src="movie.poster_path" style="height: ;" alt="">
                    ass{{searchM.total_pages }} -- {{total_pagesS}}
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="movieLike(index)" >
                        <i class="fa fa-heart"></i></button>
                        <button class="btn btn-outline-primary mx-3"  to="/detalles">
                          <i class="fa fa-info" to="/detalles"></i>
                        </button>
                         <router-link  class="btn btn-outline-primary mx-3" :to="{name:'details', params: {id:movie.id} }">Detalles</router-link>
                    </div>
                </div>
            </div>
        </div>

        
        <router-link :to="{name:'home', params:{page:n} }" v-for="(n, index) of total_pagesS" :key="index">
            <button class="btn btn-sm" 
            :class="{'btn-outline-primary': n!= pageS,
            'btn-primary': n == pageS}" 
            @click="setPageSearch(n)" >{{n}}</button>
       
        </router-link>
        <nav aria-label="Page navigation example">
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
        </nav>
      </div>
      <div v-else="Object.keys(searchM).length == 0">
        <movies/>
      </div>

     

     
      

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movies from"@/components/Movies.vue"
import {mapState, mapMutations, mapActions} from "vuex"

export default {
  name: 'home',
  components: {
    movies
  },
  computed:{
    ...mapState([ "pageS","total_pagesS","query","searchM"])
  },
  methods:{
    ...mapActions(["searchMovies","setPageSearch"]),
    ...mapMutations(["imgContainer"])
  }
}
</script>
