const base = {
    get() {
        return {
            url : "http://localhost:8080/youxihotaixitong/",
            name: "youxihotaixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/youxihotaixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "游戏后台系统"
        } 
    }
}
export default base
