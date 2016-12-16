
/*NaN和任何值进行算术操作的结果都是NaN*/
console.log();
/**
 * 如果被操作的值不是number类型会发生什么？
 *
 * 1.如果是加运算，任何一边不是number类型，则会把值变成string类型，再将两个字符串进行拼接后返回新的字符串
 *
 * 例如:
 */

var example=10+'1';
console.log(example);

/**
 * 思考下面几条语句返回什么
 */
var test1=10+5+'1';
var test2='1'+10+5;
var test3='1'+(10+5);