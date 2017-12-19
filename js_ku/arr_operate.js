/*
* arrUniq：方法用来对数组去重
*比较高效的一种方法
* */
function arrUniq (arr) {
    var res = [];
    var json = {};
    for(var i = 0; i < arr.length; i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
}