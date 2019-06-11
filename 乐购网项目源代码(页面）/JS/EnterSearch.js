function search() {
    //为方便起见，直接跳转到搜索页面
    window.open("Result.html");
}
function huichesearch(){//回车搜索
    var event = window.event||arguments.callee.caller.arguments[0];
    if(event.keyCode== 13){
        search();//搜索函数
    }
}