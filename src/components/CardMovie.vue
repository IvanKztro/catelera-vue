<template>
    <div>
        
        
        <div>
            <button class="btn btn-sm btn-outline-primary" v-for="(n, index) of total_pages" :key="index">{{n}}</button>
        </div>
        

       
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex"

export default {
    name:"movies",
    computed:{
        ...mapState(["like", "movies","page","total_pages"])
    },
    methods:{
        ...mapActions(["movieLike"]),
        ...mapMutations(["likeIt"])
    }

}
</script>