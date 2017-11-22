//  去掉输入的首位空格
function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//  截取字符串中"aaa"和"fff"之间的内容
function jiequ_between(str) {
    return str.match(/aaa(\S*)fff/)[1];
}
//  截取字符串中"fff"之前的内容
function jiequ_before(str) {
    return str.match(/(\S*)fff/)[1];
}
//  截取字符串中"aaa"之后的内容
function jiequ_behind(str) {
    return str.match(/aaa(\S*)/)[1];
}


