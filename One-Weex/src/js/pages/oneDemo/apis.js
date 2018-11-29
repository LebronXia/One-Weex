
var apiURL = {
    baseurl: 'http://v3.wufazhuce.com:8000/api/',
    idlist: 'onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
    onelist:'onelist/',
    eassydetail: 'essay/',
    moviedetail: 'movie/',

};
function getData(url, callback) {
    return this.$fetch({
        method: 'GET',
        url:'',
        data: {},
    }).then(
        resData => {
            callback(resData);
        }
    )
}
let apis = {
    getIdList(url, callback) {
        return getData(apiURL.baseURL + apiURL.idlist, callback);
    },
    getOneList(id, callback) {
        return getData(apiURL.baseURL + id + '/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
            callback)
    },
    getReadDetail(item_id, callback) {
        return getData(apiURL.baseURL + item_id + '?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
            callback)
    }
}
export default apis;




