<template>
    <!--<text class="header-text">你好</text>-->
    <list class="home-list">

        <cell v-for="(reading, index) in this.readinglist" class="cell-button">
            <list-item :content="reading" :type="typelist[index]"></list-item>
        </cell>
    </list>
</template>

<script>
    if (process.env.NODE_ENV == 'development') require('Config')
    import listitem from '../home/list-item'
    export default {

        created(){
            this.getReadData()
        },
        components: {
            'list-item' : listitem
        },
        data(){
            return {
                readinglist:[],
                typelist:[],
                type: ''
            }
        },
        methods: {
            getReadData(){
                this.$fetch({
                    method: 'GET',
                    url: 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?' +
                    'channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
                    data:{}
                }).then(resData => {
                    console.log(resData)
                    let readings = resData.data
                    this.checkType(readings)
                    this.readinglist = readings

                })
            },
            checkType(readings){
                let readtype = ''
                readings.forEach((value) => {
                    switch(Number(value.content_type))
                    {
                        case 1:
                            this.type ="阅读"
                            break;
                        case 2:
                            this.type = "连载"
                            break;
                        case 3:
                            this.type = "问答"
                            break;
                    }

                    if(value.tag_list.length != 0){
                        readtype = value.tag_list[0].title
                    }
                    this.typelist.push(readtype)
                })
            }

        }
    }
</script>

<style scoped lang="sass" src="./index.scss">

</style>
