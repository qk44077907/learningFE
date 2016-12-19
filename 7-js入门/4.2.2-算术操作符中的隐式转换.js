
/**NaN和任何值进行算术操作的结果都是NaN*/

console.log(NaN/2);

/**
 * 如果被操作的值不是number类型会发生什么？
 *
 */

 /**
 * 1.如果是加运算，任何一边不是number类型，则会把值变成string类型，再将两个字符串进行拼接后返回新的字符串
 *
 * 例如:
 */

var exampleAdd=10+'1';
console.log(exampleAdd);

/**
 * 思考下面几条语句返回什么
 */
var test1=10+5+'1';
var test2='1'+10+5;
var test3='1'+(10+5);


/**
 * 2.如果是其他运算，任何一边不是number或string类型则返回NaN，
 * 如果是string类型，字符串是纯数字则将其转换成内容相同的number类型:不是纯数字的字符串会被转换为NaN，导致最终结果是NaN
 *
 *
 * 3.其他情况P47
 *
 *
 * 例如:
 */
var exampleSub=10-'1';
console.log(exampleSub);