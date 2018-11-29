<template>
    <div class="item-cell">
        <image class="item-image" :src="values[0].text"></image>
    </div>
</template>

<script>
    export default {
        name: "serviceitemimg",
        props:['values']
    }
</script>

<style scoped>
    .item-cell{
        background-color: #fff;
        padding-top: 28px;
        padding-left: 24px;
        padding-bottom: 28px;
        flex-direction: row;
    }
    .item-image{
        width: 702px;
        height: 104px;
    }
</style>
