<template>
    <div>
        <div class="row">
            <div v-for="(movie, index) in movies" :key="index" class="col-lg-3 col-md-4 col-12 ">
                <div v-if="movie.poster_path" class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto" :src= "movie.poster_path" style="height: ;" alt="">
                
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="movieLike(index)" >
                        <font-awesome-icon icon="heart"></font-awesome-icon></button>
                        <router-link  class="btn btn-outline-primary mx-3" :to="{name:'details', params: {id:movie.id} }">
                            <font-awesome-icon icon="info" to="/details"></font-awesome-icon>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

       <!-- <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item" :to="{name:'home', params:{page:n} }" v-for="(n, index) of total_pages" :key="index">
                <a class="page-link" href="#">{{n}}</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>-->
        <!--<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>-->
         
       <!-- <router-link :to="{name:'home', params:{page:n} }" v-for="(n, index) of total_pages" :key="index">
            <button class="btn btn-sm" 
            :class="{'btn-outline-primary': n!= page,
            'btn-primary': n == page}" 
            @click="setPageTotal(n)" >{{n}}</button>
       
        </router-link>-->
        
    </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex"
export default {
    name: "movies",
    data() {
        return{
            title: "catalogo movies"
        }
    },
    components:{
        //cardMovie
    },
     computed:{
        ...mapState([ "movies","page","total_pages"])
    },
    methods:{
        ...mapActions(["movieLike","setPageTotal"]),
        ...mapMutations(["likeIt","imgContainer"])
    }
}
</script>