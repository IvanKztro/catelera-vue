<template>
    <div>                                                                   
        <div class="heroMovie text-white py-3" :style="{
            'background': 'linear-gradient(to right, rgba(213,245,227,0.45), rgba(59,168,119,1)),url('+movieDetails.backdrop_path+')',
            'background-size': 'cover', 'background-repeat': 'no-repeat',' background-attachment': 'fixed' }"
        >
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-4 col-lg-3">
                        <img :src= "movieDetails.poster_path" alt="">
                    </div>
                    <div class="col-12 col-md-8 col-lg-9">
                        <h2>{{movieDetails.title}}</h2>
                        <p>{{movieDetails.overview}}</p>
                        <h5>Fecha estreno</h5>
                        <p>{{movieDetails.release_date}}</p>
                        <h5>Página oficial</h5>
                        <p>{{movieDetails.homepage}}</p>

                    </div>
                    <div>
                        <h2>Calificación</h2>
                        <p class="text-center" style="font-size: 40px;">{{movieDetails.vote_average}}</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapActions} from"vuex"
export default {
    data(){
        return{
            movie: {}
        }
    },
    computed:{
        ...mapState(["movieDetails"])
    },
    methods:{
       ...mapActions(["getDetails"]) 
    },
    mounted() {
         this.getDetails();
    }
}
</script>