<template>
    <scroller>
        <div class="wrapper">
            <text class="button button-big" @click = "pengyouquan">跳转朋友圈</text>
        </div>

        <div class="wrapper">
            <text class="button button-big" @click = "tabpage">页面滑动组件</text>
        </div>

        <div class="wrapper">
            <text class="button button-big" @click = "servicepage">服务</text>
        </div>
    </scroller>


</template>

<script>
    export default {
        name: "test",
        methods : {
            pengyouquan(){
                this.$router.open({
                    name: 'onedemo.pengyouquan',
                    type: 'PUSH'
                })
            },
            tabpage(){
                this.$router.open({
                    name: 'onedemo.tabpage',
                    type: 'PUSH'
                })
            },
            servicepage(){
                this.$router.open({
                    name: 'onedemo.service',
                    type: 'PUSH'
                })
            }
        }
    }
</script>

<style scoped>

    .wrapper {
        flex-direction: row;
        justify-content: space-around;
    }

    .button {
        text-align: center;
        border-style: solid;
        color: #fff;
        border-color: #1da1f2;
        border-radius: 15px;
        background-color: #1da1f2;
    }


    .button-big {
        width: 400px;
        height: 90px;
        margin-top: 60px;
        font-size: 34px;
        padding-top: 25px;
        border-width: 2px;
    }
</style>
