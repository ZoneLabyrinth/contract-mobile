
// 格式化金钱
export const formatCash = n => {
    return Number(n).toLocaleString();
}


export const getQueryString = name => {
    //匹配一个开头或&
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    } else {
        return null
    }

}
export const toDub = n => {
    return n < 10 ? '0' + n : '' + n
}

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
export const today = `${year}-${toDub(month + 1)}-${toDub(day)}`

