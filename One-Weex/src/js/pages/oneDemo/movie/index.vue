<template>
    <list class="home-list">

        <cell v-for="(movie, index) in this.movielist" class="cell-button">
            <list-item :content="movie" :type="typelist[index]"></list-item>
        </cell>
    </list>
</template>

<script>
    if (process.env.NODE_ENV == 'development') require('Config')
    import listitem from '../home/list-item'
    export default {
        name: "index",
        created(){
            this.getMovie()
        },
        components: {
            'list-item' : listitem
        },
        data(){
            return{
                movielist:[],
                typelist:[]
            }
        },
        methods: {
            getMovie(){
                this.$fetch({
                    method: 'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/channel/movie/more/0?' +
                    'channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data:{}
                }).then(resData => {
                    console.log(resData)
                    this.movielist = resData.data
                    // if (content.tag_list.size() != 0) {
                    //     ((MovieHolder) holder).tv_type.setText("- " + content.tag_list.get(0).title + " -");
                    // } else {
                    //     ((MovieHolder) holder).tv_type.setText("- 影视 -");
                    // }
                    this.movielist.forEach((value) => {
                        if (value.tag_list.length != 0){
                            this.typelist.push(content.tag_list[0].title);
                        } else {
                            this.typelist.push("影视");
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped lang="sass" src="../read/index.scss">

</style>
