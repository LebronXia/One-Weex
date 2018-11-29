<template>

    <div>
    <!--<home-header style="height: 100px">-->
        <!--你好-->
    <!--</home-header>-->
    <wxc-tab-page ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="icon"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">


        <list v-for="(v,index) in tabList"
              :key="index"
              class="item-container"
              :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
                  class="cell"
                  :key="key"
                  :accessible="true"
                  aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
                <wxc-pan-item url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                              @wxcPanItemPan="wxcPanItemPan">
                    <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                              :image-text="tabTitles[index].title"
                              title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                              :desc="desc"
                              :tags="tags"
                              price="666"
                              price-desc="月售58笔｜999+条评论"/>
                </wxc-pan-item>
            </cell>
        </list>

    </wxc-tab-page>
    </div>
</template>

<script>
    import {WxcTabPage, WxcPanItem, Utils} from 'weex-ui';
    import header from '../common/header';
    import Config from './config'
    import WxcItem from './wxc-item.vue';
    import BindingX from 'weex-bindingx';

    export default {
        components: { WxcTabPage, WxcPanItem, WxcItem, header},
        data: () => ({
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            tabList: [],
            needSlider: true,
            demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            supportSlide: true,
            isTabView: true,
            tabPageHeight: '1334px',
            desc: [{
                type: 'text',
                value: '特价机票|班期:清明 3/27-4/2等',
                theme: 'gray'
            }],
            tags: [{
                type: 'tag',
                value: '满100减20测试',
                theme: 'yellow'
            }]
        }),
        created () {
           // setTitle('TabPage');
            //this.tabPageHeight = Utils.env.getPageHeight();
            this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
            Vue.set(this.tabList, 0, this.demoList);
        //     var result = BindingX.bind({
        //         eventType: 'pan',       //==> 事件类型
        //         anchor: 'foo',          //==> anchor指的是事件的触发者，如果是eventType是"orientation"或"timing",则不用填
        //         props: [
        //             {
        //                 element: 'wxc-tab-page',     //==> 要改变的视图的引用或者id
        //                 expression: "1-x/100", //==> 表达式
        //                 property: "opacity"    //==> 要改变的属性
        //     }
        //     ]
        // })
        },
        methods: {
            getData (index) {
                setTimeout(() => {
                    this.$refs['list_' + index][0].refreshEnd()
                }, 3000)
            },
            selected () {
                console.log(111)
            },
            wxcTabPageCurrentTabSelected (e) {
                const self = this;
                const index = e.page;
                /* 未加载tab模拟数据请求 */
                if (!Utils.isNonEmptyArray(self.tabList[index])) {
                    setTimeout(() => {
                        Vue.set(self.tabList, index, self.demoList);
                    }, 100);
                }
            },
            wxcItemGoodPan (e) {
                if (Utils.env.supportsEBForAndroid()) {
                    this.$refs['wxc-tab-page'].bindExp(e.element);
                }
            }
        }


    }
</script>

<style scoped>
    .item-container {
        width: 750px;
        height: 1334px;
        background-color: #f2f3f4;
    }

    .border-cell {
        background-color: #f2f3f4;
        width: 750px;
        height: 24px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }

    .cell {
        background-color: #ffffff;
    }

    .content{
        width:750px;
        height:300px;
        border-bottom-width:1px;
        align-items: center;
        justify-content: center;
    }

</style>
