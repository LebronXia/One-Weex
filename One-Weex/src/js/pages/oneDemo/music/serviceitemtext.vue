<template>
    <div class="item-cell">
        <div v-for="(item, i) in values">
            <text class="item_text" >{{item.text}}</text>
        </div>

    </div>
</template>

<script>
    export default {
        name: "serviceitemtext",
        props:['values'],
    }
</script>

<style scoped>
    .item-cell{
        background-color: #fff;
        padding-top: 28px;
        padding-right: 24px;
        padding-bottom: 28px;
        flex-direction: row;
        margin-bottom: 2px;
    }
    .item_text{
        background-color: #f4f4f4;
        font-size: 28px;
        color: black;
        padding-right: 28px;
        padding-left: 28px;
        padding-top: 12px;
        padding-bottom: 12px;
        margin-left: 24px;
    }
</style>
