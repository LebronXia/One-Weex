/*eslint-disable*/
<template>
    <div class="item-cell">
        <text class="item-title">房价高企的当下，为什么不做好住宅租赁体系?</text>
        <div class="images-box">
            <image class="item-image"></image>
            <image class="item-image"></image>
            <image class="item-image"></image>
        </div>

        <div class="item-bottom-box">
            <text class="bottom-text-1">优惠活动</text>
            <text class="bottom-text-2">12267人阅读</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "serviceitemtwo"
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
        lines: 1;
        text-overflow: ellipsis;
    }
    .images-box{
        flex-direction: row;
        margin-top: 20px;
    }
    .item-image{
        height: 158px;
        flex: 1;
        background-color: #1da1f2;
        margin-right: 12px;
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
