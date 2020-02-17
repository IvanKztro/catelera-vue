<template>
    <div class="mt-5 pt-5 container">
        <div class="row">
            <div v-for="(movie, index) in moviesFav" :key="index" class="col-lg-3 col-md-4 col-12 ">
                <div v-if="movie.poster_path" class="card mb-4" >
                    <img class="card-img-top img-fluid mx-auto" :src= "movie.poster_path" style="height: ;" alt="">
                
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <hr>
                        <button class="btn" 
                        :class="movie.like ? 'btn-outline-danger' : 'btn-outline-secondary'"
                        @click="deleteFav(index)" >
                        <font-awesome-icon icon="heart"></font-awesome-icon></button>
                        <router-link  class="btn btn-outline-primary mx-3" :to="{name:'details', params: {id:movie.id} }">
                            <font-awesome-icon icon="info" to="/details"></font-awesome-icon>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapMutations, mapState} from "vuex"
export default {
    computed: {
        ...mapState(["moviesFav"])
    },
    methods:{
        ...mapActions(["deleteFav"])
    }
}
</script>