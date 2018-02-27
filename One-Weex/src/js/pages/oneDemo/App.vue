<template>

    <tab-bar :tabItems="items" @tabBarOnClick="tabbarOnClick"></tab-bar>
</template>

<script>
    import tabBar from './common/bar'
    import  { tabCofig } from "./config";

    export default {
        data(){
            return {
                items: tabCofig
            }
        },
        components: {
            'tab-bar' : tabBar,
        }
    }
</script>

<style scoped>

</style>
