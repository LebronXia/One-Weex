<template>
    <div class="item-cell">
        <text class="item-title">房价高企的当下，为什么不做好住宅租赁体系?</text>
        <image class="item-image" resize="stretch" src="https://r.51gjj.com/image/catalog/laidandan/shequ/2018.03/0309fwbanner.png"></image>
        <div class="item-bottom-box">
            <text class="bottom-text-1">优惠活动</text>
            <text class="bottom-text-2">12267人阅读</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "serviceitemthree"
    }
</script>

<style scoped>
    .item-cell{
        background-color: #fff;
        padding-top: 28px;
        padding-left: 24px;
        padding-right: 24px;
        /*border-bottom-width: 2px;*/
        /*border-bottom-color: #f4f4f4;*/
    }
    .item-title{
        font-size: 32px;
        color: black;
        lines: 2;
        text-overflow: ellipsis;
    }
    .item-image{
        margin-top: 20px;
        width: 702px;
        height: 320px;
        color: #1da1f2;
    }
    .item-bottom-box{
        margin-top: 24px;
        margin-bottom: 28px;
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
</style>
