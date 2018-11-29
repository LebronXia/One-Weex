<template>
       <div class="item-cell">
           <text class="item-title">{{serviceitem.title}}</text>

           <div class="item-bottom-box">
               <text class="bottom-text-1">{{serviceitem.cat_name}}</text>
               <text class="bottom-text-2">{{serviceitem.reads + "人阅读"}}</text>
           </div>
           <image class="item-image" resize="stretch" :src="serviceitem.posters[0]"></image>
       </div>
</template>

<script>
    export default {
        name: "serviceitemone",
        props:['serviceitem'],
    }
</script>

<style scoped>
    .item-cell{
        background-color: #fff;
        height: 180px;
        margin-bottom: 2px;
    }
    .item-title{
        position: absolute;
        top: 28px;
        left: 24px;
        right: 224px;
        font-size: 32px;
        color: black;
        overflow: hidden;
        lines: 2;
        text-overflow: ellipsis;
    }
    .item-bottom-box{
        position: absolute;
        bottom: 28px;
        left: 24px;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .bottom-text-1{
        font-size: 22px;
        color: #666;
    }
    .bottom-text-2{
        font-size: 22px;
        color: #666;
        margin-left: 50px;
    }
    .item-image{
        width: 166px;
        height: 124px;
        position: absolute;
        top: 28px;
        bottom: 28px;
        right: 24px;
    }
</style>
