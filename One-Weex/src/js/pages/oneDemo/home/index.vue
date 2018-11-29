<template>

    <list class="home-list">
        <cell class="top-header">
                <text class="header-text">{{this.title}}</text>
                <text class="header_txt_des">{{this.homeData.weather.climate + ',' + this.homeData.weather.city_name}}</text>
            <image class="header_image" resize="cover" :src="this.homeData.content_list[0].img_url"></image>
            <text class="header_txt_author">{{this.homeData.content_list[0].title + " | " + this.homeData.content_list[0].words_info}}</text>

            <div class="slogn">
                   <text class="text_gray1">小计</text>
                   <text class="text_gray2">{{this.homeData.content_list[0].like_count}}</text>
            </div>
        </cell>

        <cell style="padding-bottom:16px;" v-for="(content, index) in this.homeData.content_list">
            <list-item v-if="index > 0" :content="content"></list-item>

        </cell>
    </list>
</template>

<script>
    if (process.env.NODE_ENV == 'development') require('Config')
    import listitem from './list-item'
    //const browser = weex.requireModule('browser')
    export default {
        name: "index",
        components: {
            'list-item' : listitem
        },
        // props: {
        //     homeData: {
        //         weather: {},
        //         content_list:[],
        //         date:''
        //     }
        // },
        //props:['homeData', 'headertext'],
        data(){
            return {
                title:'',
                idList: [],
                homeData: {
                    weather: {},
                    content_list:[],
                    date:''
                }
            }
        },
        created(){
           //console.log(this.homeData)
        },
        methods: {
            updateTitle(text){
                this.title = text
            },
            getIdList(){
                this.$fetch({
                    method:'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/onelist/idlist/' +
                    '?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data: {}
                }).then(
                    resData => {
                        //console.log(resData)
                        this.idList = resData.data
                        this.getHomeData(this.idList[0])
                    }
                )
            },
            getHomeData(id){
                this.$fetch({
                    method: 'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/onelist/' + id + '/0?cchannel=wdj&version=4.1.0' +
                    '&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data: {}
                }).then(
                    resData => {
                        console.log(resData)

                        this.homeData.date = resData.data.date
                        this.homeData.weather = resData.data.weather
                        let contentlist = resData.data.content_list
                        this.handleDate(contentlist)
                        this.homeData.content_list = contentlist

                    }
                ),error => {
                  console.log(error)
                }
            },
            //进行时间换算
            handleDate(content_list){
                content_list.forEach((value) => {
                    let timestamp = this.getDateTimeStamp(value.post_date)
                    let diff = this.getDateDiff(timestamp)
                    value.post_date = diff
                })
            },
            getDateDiff(dateTimeStamp){
                var minute = 1000 * 60;
                var hour = minute * 60;
                var day = hour * 24;
                var month = day * 30;
                var now = new Date().getTime();
                var diffValue = now - dateTimeStamp;
                if (diffValue < 0) {
                    return;
                }

                var monthC = diffValue / month;
                var weekC = diffValue / (7 * day);
                var dayC = diffValue / day;
                var hourC = diffValue / hour;
                var minC = diffValue / minute;

                var result = ""
                if (monthC >= 1) {
                    result = "" + parseInt(monthC) + "个月前";
                } else if (weekC >= 1) {
                    result = "" + parseInt(weekC) + "周前";
                } else if (dayC >= 1) {
                    result = "" + parseInt(dayC) + "天前";
                } else if (hourC >= 1) {
                    result = "" + parseInt(hourC) + "小时前";
                } else if (minC >= 1) {
                    result = "" + parseInt(minC) + "分钟前";
                } else
                    result = "刚刚";
                return result;
            },
            getDateTimeStamp(dateStr){
                //得到毫秒数
                return Date.parse(dateStr.replace(new RegExp("-", "gm"), "/"));
            }
        }
    }
</script>

<style scoped lang="sass" src="./index.scss">

</style>
