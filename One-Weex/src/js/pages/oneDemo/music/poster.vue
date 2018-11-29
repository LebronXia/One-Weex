<template>
   <image class="uncle-sam" :src="src"/>
</template>

<script>
    export default {
        name: "poster",
        data(){
            return {
                src: ''
            }
        },
        methods: {
           update(newSrc){
               this.src = newSrc
           }
        }
    }
</script>

<style scoped>
    .uncle-sam {
        width: 750px;
        height: 1000px;
    }
</style>
