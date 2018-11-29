<template>
    <div class="">
        <slider class="slider" @change="sliderChange">
            <div class="slider" v-for="id in idList" >
                <content ref="content"></content>
            </div>
        </slider>
    </div>
</template>

<script>
    if (process.env.NODE_ENV == 'development') require('Config')
    import content from './index'
    export default {
        name: "maincontent",
        components: {
            content
        },
        created(){
            this.getIdList()
        },
        data(){
            return {
                idList: [],
                homeData: {
                    weather: {},
                    content_list:[],
                    date:''
                },
                headertext: "你好"
            }
        },
        methods: {
            getIdList(){
                this.$fetch({
                    method:'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/onelist/idlist/' +
                    '?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data: {}
                }).then(
                    resData => {
                        console.log(resData)
                        this.idList = resData.data
                        const $content = this.$refs.content
                        if ($content){
                           // $content.getHomeData(this.idList[0])
                            $content.updateTitle(this.headertext)
                        }
                        //this.getHomeData(this.idList[0])
                    }
                )
            },
            // getHomeData(id){
            //     this.$fetch({
            //         method: 'GET',
            //         url: 'http://v3.wufazhuce.com:8000/api/onelist/' + id + '/0?cchannel=wdj&version=4.1.0' +
            //         '&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
            //         data: {}
            //     }).then(
            //         resData => {
            //             console.log(resData)
            //
            //             this.homeData.date = resData.data.date
            //             this.homeData.weather = resData.data.weather
            //             let contentlist = resData.data.content_list
            //             this.handleDate(contentlist)
            //             this.homeData.content_list = contentlist
            //
            //         }
            //     ),error => {
            //         console.log(error)
            //     }
            // },
            sliderChange(e){
                //this.getHomeData(this.idList[e.index])
                const $content = this.$refs.content
                if ($content){
                   // $content.getHomeData(this.idList[e.index])
                }
            },
            // //进行时间换算
            // handleDate(content_list){
            //     content_list.forEach((value) => {
            //         let timestamp = this.getDateTimeStamp(value.post_date)
            //         let diff = this.getDateDiff(timestamp)
            //         value.post_date = diff
            //     })
            // },
            // getDateDiff(dateTimeStamp){
            //     var minute = 1000 * 60;
            //     var hour = minute * 60;
            //     var day = hour * 24;
            //     var month = day * 30;
            //     var now = new Date().getTime();
            //     var diffValue = now - dateTimeStamp;
            //     if (diffValue < 0) {
            //         return;
            //     }
            //
            //     var monthC = diffValue / month;
            //     var weekC = diffValue / (7 * day);
            //     var dayC = diffValue / day;
            //     var hourC = diffValue / hour;
            //     var minC = diffValue / minute;
            //
            //     var result = ""
            //     if (monthC >= 1) {
            //         result = "" + parseInt(monthC) + "个月前";
            //     } else if (weekC >= 1) {
            //         result = "" + parseInt(weekC) + "周前";
            //     } else if (dayC >= 1) {
            //         result = "" + parseInt(dayC) + "天前";
            //     } else if (hourC >= 1) {
            //         result = "" + parseInt(hourC) + "小时前";
            //     } else if (minC >= 1) {
            //         result = "" + parseInt(minC) + "分钟前";
            //     } else
            //         result = "刚刚";
            //     return result;
            // },
            // getDateTimeStamp(dateStr){
            //     //得到毫秒数
            //     return Date.parse(dateStr.replace(new RegExp("-", "gm"), "/"));
            // }
        }
    }
</script>

<style scoped>
    .slider{
        width: 750px;
        color: #353535;
        background-color: #666;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
