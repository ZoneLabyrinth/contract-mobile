
// 格式化金钱
export const formatCash = n => {
    return Number(n).toLocaleString();
}


export const getQueryString = name => {
    //匹配一个开头或&
    console.log(name)
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg);
    console.log(window.location)
    if (r != null) {
        return unescape(r[2])
    } else {
        return null
    }

}