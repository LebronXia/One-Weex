<template>
    <list class="wrapper">
        <cell class="header">
            <image class="poster" resize="cover" :src="currentUser.poster"></image>
            <text class="name">{{currentUser.name}}</text>
            <image class="profile" resize="cover" :src="currentUser.profile"></image>
        </cell>

        <cell class="moment" v-for="(moment, i) in moments" :key="i">
            <image class="author-profile" resize="cover" :src="moment.author.profile"></image>
            <div class="main">

                <text class="author-name link-text">{{moment.author.name}}</text>
                <text class="moment-content">{{moment.content}}</text>
                <div class="moment-media" v-if="moment.media">
                    <div class="moment-pictures" v-if="moment.media.pictures && moment.media.pictures.length">
                        <image class="picture" v-for="(src, p) in moment.media.pictures" :key="p" :src="src"></image>
                    </div>

                    <div class="moment-share" v-if="moment.media.share">
                        <image class="share-thumbnail" :src="moment.media.share.thumbnail"></image>
                        <text class="share-title">{{moment.media.share.title}}</text>
                    </div>
                </div>
                <div class="moment-info">
                    <text class="moment-time" v-if="moment.time">{{moment.time}}</text>
                    <text class="moment-operation link-text" v-if="moment.author.name === currentUser.name">删除</text>
                    <image class="moment-feedback" src="https://gw.alicdn.com/tfs/TB1_POLc3MPMeJjy1XcXXXpppXa-66-46.png"></image>
                </div>

                <image class="moment-arrow" v-if="moment.likes || moment.comments" src="https://gw.alicdn.com/tfs/TB1F0OLc3oQMeJjy0FnXXb8gFXa-30-12.png"></image>
                <div class="moment-likes" v-if="moment.likes && moment.likes.length">
                    <text class="like-list link-text">♡ {{moment.likes.join(', ')}}</text>
                </div>
            </div>

        </cell>
    </list>
</template>

<script>
    const mockMoments = [{
        author: {
            profile: 'http://img.qqzhi.com/upload/img_0_264028261D222908825_23.jpg',
            name: '孔明'
        },
        content: '精心整理，大家帮忙点个赞！',
        media: {
            share: {
                link: 'xxx',
                title: '手把手教你制作孔明灯，五分钟学会！',
                thumbnail: 'http://d9.yihaodianimg.com/N01/M08/1D/63/CgQCrlKsgAWAbKvCAAG6a3qH_po82600_380x380.jpg',
            }
        },
        time: '37 分钟前',
        from: '微博',
        likes: ['刘备', '黄月英', '孙尚香', '关羽', '大乔', '小乔', '貂蝉', '甄宓', '曹植', '蔡文姬', '吕布', '张春华', '赵云'],
        comments: [{
            author: '赵云',
            content: '丞相，有好多妹子给你点赞啊'
        }]
    }, {
        author: {
            profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
            name: '刘备'
        },
        content: '勿以恶小而为之，勿以善小而不为。',
        media: {
            pictures: ['http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg'],
        },
        time: '1 小时前',
        likes: ['刘禅', '孔明', '云长', '翼德', '孙权', '马超'],
        comments: [{
            author: '刘禅',
            content: '爸比，你说的太好啦，这是我的人生格言！'
        }, {
            author: '尚香♥',
            content: '哇塞好帅，图是我拍的 (ღˇ◡ˇღ)'
        }, {
            author: '刘备',
            reply: '刘禅',
            content: '以后每天早上抄十遍'
        }, {
            author: '孔明',
            content: '主公微言大义，定会被后人广为传颂 👍'
        }],
    }, {
        author: {
            profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
            name: '云长'
        },
        content: '还是大哥见多识广，这些年来跟着大哥学到了很多东西，开阔了视野，感恩。',
        media: {
            pictures: ['http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg']
        },
        time: '2 小时前',
        from: '微博',
        likes: ['刘备', '孔明', '赵云'],
        comments: [{
            author: '翼德',
            content: '这是什么东西，为什么大哥没给我看过？！'
        }, {
            author: '刘备',
            reply: '翼德',
            content: '快来看，我们在三号帐篷附近'
        }]
    }]
    export default {
        data () {
            return {
                currentUser: {
                    name: '刘备',
                    profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
                    poster: 'http://pic.fayi.com.cn/Upload/origin/123/62123.jpg'
                },
                moments: mockMoments
            }
        }

    }
</script>

<style scoped>
    .header {
        height: 600px
    }
    .poster {
        width: 750px;
        height: 520px;
        background-color: #BBB;
    }
    .name {
        position: absolute;
        right: 250px;
        bottom: 105px;
        font-size: 36px;
        color: #FFF;
    }
    .profile {
        position: absolute;
        width: 185px;
        height: 185px;
        right: 40px;
        bottom: 0px;
    }
    .moment{
        flex-direction: row;
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom-width: 2px;
        border-bottom-color: #DDD;
    }
    .author-profile {
        width: 95px;
        height: 95px;
        margin-top: 15px;
        margin-left: 15px;
    }
    .main {
        margin-left: 6px;
    }
    .author-name{
        font-size: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 15px;

    }
    .link-text{
        color: #5E7EC2;
        color: #576B95;
    }
    .moment-content {
        font-size: 24px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .moment-media {

    }
    .moment-pictures {
        flex-direction: row;
        padding-bottom: 8px;
    }
    .picture {
        width: 450px;
        height: 260px;
    }
    .moment-share{
        width: 580px;
        flex-direction: row;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #EEEEEE;
    }
    .share-thumbnail{
        width: 85px;
        height: 85px;
    }
    .share-title{
        font-size: 28px;
        margin-top: 20px;
        margin-left: 10px
    }
    .moment-info{
        width: 580px;
        height: 50px;
        flex-direction: row;
        padding-top: 20px;
    }
    .moment-time{
        font-size: 20px;
        color: #999999;
    }
    .moment-operation {
        font-size: 20px;
        color: black;
        margin-left: 10px;
    }
    .moment-feedback{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45px;
        height: 32px;
    }
    .moment-arrow {
        margin-left: 30px;
        width: 30px;
        height: 12px;
        margin-top: 20px
    }
    .moment-likes {
        width: 580px;
        background-color: #F2F2F2;
        padding-left: 20px;
        padding-right: 10px;
    }
    .like-list{
        font-size: 24px;
        color: black;
        padding-top: 10px;
        line-height: 28px;
    }


</style>
