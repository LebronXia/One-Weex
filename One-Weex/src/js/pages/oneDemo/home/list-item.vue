<template>
    <div class="wrapper" @click="jump()">
        <text class="item_txt_top">{{"-" + type + "-"}}</text>

        <text class="item_tlt">{{content.title}}</text>
        <text class="item_desc_txt">{{"文／" + content.author.user_name}}</text>

        <div class="item-img-box">
            <image class="item-img" resize="cover" :src="content.img_url"></image>
        </div>
        <text class="item_txt_des">{{content.forward}}</text>

        <text class="item_date_txt">{{content.post_date}}</text>
    </div>
</template>

<script>
    export default {
        props:['content', 'type'],
        data(){

        },
        methods: {

            jump() {
                // if (this.content.content_type){
                //     console.log(this.content)
                // }
                console.log(this.content.content_type)
                switch (Number(this.content.content_type)) {
                    case 1:
                        console.log("hahhahah")
                        this.$router.open({
                            name: 'onedemo.read',
                            type: 'PUSH',
                            params: {
                                itemid: this.content.item_id,
                                typetitle: this.type
                            },
                            backCallback: ()=> {
                                this.$notice.toast({
                                    message: '页面返回回调'
                                })
                            }
                        })
                        break;
                    case 2:
                        break;
                    case 3:
                        QuestionActivity.start(mContext, id);
                        break;
                }


            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .item_txt_top {
        text-align: center;
        color: #999;
        padding: 6px;
        font-size: 30px;
        width: 750px;
    }
    .item_tlt {
        font-size: 36px;
        font-weight: bold;
        margin-top: 40px;
        margin-left: 60px;
        margin-right: 60px;
        padding-bottom: 20px;
    }
    .item_desc_txt {
        font-size: 30px;
        margin-left: 60px;
        padding: 18px;
    }
    .item-img-box{
        align-items: center;
        justify-content: center;
    }
    .item-img {
        width: 550px;
        height: 380px;
    }
    .item_txt_des {
        font-size: 30px;
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 40px;
        padding-bottom: 40px;
        overflow: hidden;
        lines: 2;
        text-overflow: ellipsis;
        color: #666;
    }
    .item_date_txt {
        font-size: 24px;
        margin-left: 60px;
        color: #666;
    }
</style>
