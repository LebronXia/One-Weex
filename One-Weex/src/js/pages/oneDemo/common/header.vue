<template>
    <!--<text class="leftTxt">你好</text>-->
   <div class="wrapper">
           <div class="left">
               <image :style="{width: 99, height: 99}"
                      v-if="showback"
                      @click="onBackClick()"
                      :src="url"></image>
           </div>
            <text class="text-type">{{title}}</text>
       <div class="right">
           <text class="rightTxt" v-if="rightBtn">不好</text>
       </div>
   </div>
</template>

<script>
    var modal = weex.requireModule('modal')
    export default {
        props: {
            title: { default: '散文'},
            url: {default: 'https://github.com/dodola/WeexOne/raw/master/imgs/return_image.png'},
            showback: {default: true},
            rightBtn: {default: false}
        },
        methods: {
            onBackClick(){
                //console.log("点击")
                //this.$emit('naviBarLeftItemClick')
                //modal.toast({ message: 'dianji', duration: 1 })
                this.$router.back({
                    length: 1,
                    type: 'PUSH',
                    callback() {
                        // 返回成功回调
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 114px;
        background-color: #fafafa;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .nav_bar {
        flex-direction: row;
        margin-bottom: 10px;
        height: 99px;
    }
    .text-type {
        font-size: 36px;
        padding-top: 10px;
        color: #333;
        margin-top: 33px;
        text-align: center;
    }
    .left,
    .right {
        height: 80px;
        width: 120px;
        padding-top: 10px;
    }

</style>
