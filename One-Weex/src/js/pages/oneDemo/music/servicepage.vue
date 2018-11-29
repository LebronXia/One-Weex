<template>
    <div class="wrapper" >
        <list class="list-cell">
            <cell>
                <image class="image" resize="stretch" src="https://r.51gjj.com/image/catalog/laidandan/shequ/2018.03/0309fwbanner.png"></image>
            </cell>

        <cell class="sub-box cell-button" >
            <div class="item-config" v-for="i in configlist">
                <image class="item-config-image" :src="i.image"></image>
                <text class="item-config-text">{{i.title}}</text>
            </div>
        </cell>

            <!--切换的时候更换数据源， listview切换-->
            <!--<div class="subtitle-box">-->
                <!--<div class="tag-cell"-->
                     <!--v-for="(tag, index) in taglist"-->
                     <!--:key="index"-->
                     <!--@click="selectTag(index)">-->

                        <!--<text class="tag-text" :style="{color : currentindex == index ? '#000' : '#666'}">{{tag.name}}</text>-->
                        <!--<div class="tag-line" :style="{ visibility: currentindex == index ? 'visible' : 'hidden'}"></div>-->
                    <!--&lt;!&ndash;<div class="line-cell">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="tag-line"></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
            <!--</div>-->

            <!--<list v-for="(service, index) in this.tabList"-->
            <!--:key = "index"-->
            <!--style="{width: 750px}">-->

            <!--<cell class="list" v-for="(item, i) in service" :key="i">-->

            <!--<text class="text">{{i}}</text>-->
            <!--<div v-if="item.kind != 'ads'">-->
            <!--&lt;!&ndash;一张图片&ndash;&gt;-->
            <!--<service-item-one :serviceitem="item" v-if="item.type === '0'" ></service-item-one>-->

            <!--&lt;!&ndash;两张图片&ndash;&gt;-->
            <!--<service-item-two v-if="item.type === '1'"></service-item-two>-->

            <!--&lt;!&ndash;大图 &ndash;&gt;-->
            <!--<service-item-threee v-if="item.type === '2'"></service-item-threee>-->

            <!--</div>-->

            <!--&lt;!&ndash;广告类型文章&ndash;&gt;-->
            <!--<div v-if="item.kind === 'ads'">-->
            <!--<service-item-text :values = 'item.value' v-if="item.type === '1'"></service-item-text>-->
            <!--<service-item-img :values = 'item.value' v-if="item.type === '2'"></service-item-img>-->
            <!--</div>-->
            <!--</cell>-->
            <!--</list>-->

            <cell>
            <wxc-tab-page
                ref="wxc-tab-page"
                :tab-titles="taglist"
                :tab-styles="tabStyles"
                title-type="aaa"
                style="margin-top: 10px"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">

                <list v-for="(servicelist,index) in tabList"
                      :key="index"
                      class="item-container"
                      :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                    <!--<cell class="border-cell"></cell>-->
                    <cell v-for="(item,key) in servicelist"
                          class="list"
                          :key="key"
                          :accessible="true"
                          aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                            <!--<text class="text">{{key}}</text>-->
                        <div v-if="item.kind != 'ads'">

                            <!--一张图片-->
                            <service-item-one :serviceitem="item" v-if="item.type === '0'" ></service-item-one>

                            <!--两张图片-->
                            <service-item-two v-if="item.type === '1'"></service-item-two>

                            <!--大图 -->
                            <service-item-threee v-if="item.type === '2'"></service-item-threee>

                        </div>

                        <!--广告类型文章-->
                        <div v-if="item.kind === 'ads'">
                            <service-item-text :values = 'item.value' v-if="item.type === '1'"></service-item-text>
                            <service-item-img :values = 'item.value' v-if="item.type === '2'"></service-item-img>
                        </div>

                    </cell>
                </list>
            </wxc-tab-page>
            </cell>
        </list>
    </div>
</template>

<script>
    import Config from './config'
    import { WxcTabPage, Utils , WxcPanItem } from 'weex-ui'
    import serviceitemone from './serviceitemone'
    import serviceitemtwo from './serviceitemtwo'
    import serviceitemthreee from './serviceitemthree'
    import serviceitemtext from './serviceitemtext'
    import serviceitemimg from './serviceitemimg'
    export default {
        data(){
            return{
                configlist: Config.configs,
                taglist: Config.taglist,
                servicelist: [],
                currentindex: 0,
                currentPage: '1',
                tagId: 'recommond',
                tabList: [],
                values: Config.value,
                //tabPageHeight: '1334px',

                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles,
            }
        },
        components: {
            'service-item-one' : serviceitemone,
            'service-item-two' : serviceitemtwo,
            'service-item-threee' : serviceitemthreee,
            'service-item-text' : serviceitemtext,
            'service-item-img' : serviceitemimg,
            WxcTabPage, WxcPanItem
        },
        created(){
            this.tabList = [...Array(this.taglist.length).keys()].map(i => []);
            this.getServiceList(this.currentPage, this.tagId, this.currentindex)
        },
        methods: {
            getServiceList(page, id, index){
                if (id === 'recommond'){
                    this.$fetch({
                        method: 'POST',
                        url: 'https://b.jianbing.com/bbs/post/get_recommend_posts', //当前是在apis中配置的别名，你也可以直接绝对路径请求 http://xx.xx.com/xxx/xxx
                        data: {
                            page: "1",
                            user_sid: "174096752",
                            tag_id: "recommond"
                        }
                    }).then(resData => {
                        // 成功回调
                        console.log(resData)
                        let services = resData.ret
                        this.handleType(services)
                        this.servicelist = services

                        Vue.set(this.tabList, index, this.servicelist)

                        //console.log(this.servicelist)
                    }, error => {
                        // 错误回调
                        console.log(error)
                    })
                } else {
                    this.$fetch({
                        method: 'POST',
                        url: 'https://b.jianbing.com/bbs/post/get_posts_by_tag',
                        data: {
                            page: page,
                            user_sid: '174096752',
                            tag_id: id
                        }
                    }).then(resData => {
                        console.log(resData)
                        let services = resData.ret
                        this.handleType(services)
                        this.servicelist = services
                        Vue.set(this.tabList, index, this.servicelist)
                        console.log(this.taglist)
                    })
                }

            },

            handleType(services){
                services.forEach((value) => {
                    if(value.pic_location != null){
                        if(value.pic_location === 'right'){
                            value.type = '0'
                        }
                        if(value.pic_location === 'down'){
                            if(value.pic_amount != null){
                                if (value.pic_amount == 1){
                                    value.type = '2'
                                } else if (value.pic_amount == 3){
                                    value.type = '1'
                                }
                            }
                        }
                    }
                })
            },
            wxcTabPageCurrentTabSelected (e) {
                const self = this;
                const index = e.page;
                self.currentPage = '1'
                self.servicelist = []
                /* 未加载tab模拟数据请求 */
                if (!Utils.isNonEmptyArray(this.tabList[index])) {
                    self.getServiceList(self.currentPage, self.taglist[index].id, index)
                }
            },
            selectTag(index){
                const self = this;
                self.currentindex = index
                self.currentPage = '1'
                //self.servicelist = []

                /* 未加载tab模拟数据请求 */
                if (!Utils.isNonEmptyArray(this.tabList[index])) {
                    self.getServiceList(self.currentPage, self.taglist[this.currentindex].id, self.currentindex)
                }
            }

        }
    }
</script>

<style scoped>
    .wrapper {

    }
    .list-cell {
        width: 750px;
        background-color: #f4f4f4;
    }
    .image {
        width: 750px;
        height: 300px;
    }
    .sub-box {
        padding-left: 26px;
        width: 750px;
        height: 300px;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;
    }
    .item-config {
        width: 178.5px;
        height: 150px;
        justify-content: center;
        align-items: center;

    }
    .item-config-image{
        height: 70px;
        width: 70px;
    }
    .item-config-text{
        font-size: 24px;
        text-align: center;
        color: #666;
        margin-top: 10px;
    }
    .subtitle-box{
        width: 750px;
        margin-top: 10px;
        flex-direction: row;
        background-color: #fff;
    }
    .tag-cell{
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tag-text{
        font-size: 26px;
        color: #666;
        text-align: center;
    }
    .line-cell{
        position: absolute;
        bottom: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tag-line{
        width: 24px;
        height: 4px;
        margin-top: 20px;
        background-color: #4678e7;
        visibility: hidden;

    }
    .list {
        width: 750px;
        background-color: #f4f4f4;
        margin-top: 2px;
    }
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }


</style>
