<template>
    <div>
        <div class="row">
            <div v-for="(movie, index) in movies" :key="index" class="col-3 ">
                <div class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto" :src= "movie.poster_path" style="height: ;" alt="">
                
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="movieLike(index)" >
                        <i class="fa fa-heart"></i></button>
                        <button class="btn btn-outline-primary mx-3" ><i class="fa fa-info"></i></button>
                    </div>
                </div>
            </div>
        </div>
         
        <router-link :to="{name:'home', params:{page:n} }" v-for="(n, index) of total_pages" :key="index">
            <button class="btn btn-sm" 
            :class="{'btn-outline-primary': n!= page,
            'btn-primary': n == page}" 
            @click="setPage(n)" >{{n}}</button>
       
        </router-link>
        
    </div>
</template>

<script>
import cardMovie from "@/components/CardMovie.vue"
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
        ...mapActions(["movieLike","setPage"]),
        ...mapMutations(["likeIt"])
    }
}
</script>