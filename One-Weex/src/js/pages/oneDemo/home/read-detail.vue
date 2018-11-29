<template>
    <div>
        <home-header>
            {{this.title}}
        </home-header>
        <!--<text class="text-author">作者 / {{author}}</text>-->
        <scroller class="scroller">
            <div class="scroller-content">
                <text class="text-leader">{{this.guideWord}}</text>
                <text class="text-title">{{title}}</text>
                <div class="author-box">
                    <image class="author-image" :src="authorImage" resize="cover"></image>

                    <div style="dflex-direction: column; margin-left: 20px">
                        <text class="text-author">Jun. 2016</text>
                        <text class="text-author">作者 / {{author}}</text>
                    </div>
                </div>
                <!--<bmrichtext class="hd-txt">-->
                    <!--<bmspan value="已提交"></bmspan>-->
                <!--</bmrichtext>-->

                <div>
                    <richText tel="12345" style="width: 200px; height: 100px"></richText>
                </div>
                <!--<richText tel="12345" style="width: 200px; height: 100px"></richText>-->
                <!--<MyWebView data="content" class="text-content">12350</MyWebView>-->
                <!--<text class="text-content">{{content}}</text>-->
            </div>
        </scroller>
    </div>
</template>

<script>
    if (process.env.NODE_ENV == 'development') require('Config')
    import header from '../common/header';
    import  { apis } from "../apis";
    var modal = weex.requireModule('modal')

    export default {

        components: {
            'home-header': header
        },
        created(){
            this.getParams()

        },
        data() {
            return{
                id:'',
                content: '',
                authorImage: '',
                guideWord: '',
                author: '',
                title: ''
            }
        },

        methods: {

            getArticles(id){
                this.$fetch({
                    method: 'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/essay/'+ id + '?channel=wdj&' +
                    'source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data: {}
                }).then(
                    resData => {
                        console.log(resData)
                    this.content = this.fmtContent(resData.data.hp_content)
                    this.authorImage = resData.data.author[0].web_url
                    this.guideWord = resData.data.guide_word
                    this.author = resData.data.author[0].user_name
                })
            },

            getParams () {
                this.$router.getParams().then(resData => {
                    // this.$notice.toast({
                    //     message: resData.text
                    // })
                    this.id = resData.itemid
                    this.title = resData.typetitle
                    console.log(resData)
                    this.getArticles(this.id)

                })
            },
            fmtContent(str){
                return "<html>" +
                    "<head>" +
                    "<meta charset=\"utf-8\">" +
                    "<title>Sign in | Score System</title>" +
                    "<style type=\"text/css\">\n" +
                    "img{margin-top:15px;margin-bottom:15px;}" +
                    "body{display:flex;flex-direction:column;justify-content:center;}" +
                    "</style>" +
                    "</head>" +
                    "<body>" +
                    str +
                    "</body>" +
                    "</html>";
            }
        },


        // naviBarLeftItemClick(e){
        //     modal.toast({ message: 'dianji', duration: 1 })
        //     this.$router.back({
        //         length: 1,
        //         type: 'PUSH',
        //         callback() {
        //             // 返回成功回调
        //         }
        //     })
        //
        // }
    }
</script>

<style scoped>
    .wrapper {
        flex-direction: column;
        justify-content: center;
    }
    .scroller{
        width: 750px;
        margin-top: 144px;
    }
    .scroller-content {
        padding-left: 30px;
        padding-right: 30px;
    }
    .text-leader {
        margin-top: 20px;
        color: #a5a5a5;
        font-size: 30px;
    }
    .text-title {
        color: black;
        font-size: 40px;
        margin-top: 26px;
        font-weight: bold;
    }
    .author-image{
        height: 100px;
        width: 100px;
        border-radius: 50px;
        background-color: #fff;
        border-color: #ffffff;
    }
    .text-author {
        color: black;
        font-size: 26px;
        height: 50px;
        text-align: center;
    }
    . text-content {
        color: #333;
        margin-top: 28px;
    }
    .author-box{
        flex-direction: row;
        margin-top: 28px;
    }
    .hd-txt {
        line-height: 100;
        color: #7d7d7d;
        font-weight: 500;
    }
</style>
