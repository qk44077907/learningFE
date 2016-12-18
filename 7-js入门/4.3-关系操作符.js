/**
 * 关系操作符包括>，>=，<，<=，==，!=，===，!==，返回一个布尔值
 */
/**
 * 对于>，>=，<，<=，任何一边是NaN,null,undefined都返回false
 * 1.两边都是number
 * 2.两边都是string依次比较字符编码
 * 3.一边是string一边是number，把string转换为number再进行比较
 * 
 * 4，其他情况P50
 */
var a=100,b=1;
console.log(a>b);





/**
 * 对于==，和===
 * 1.两边都是number
 * 2.两边都是string依次比较字符编码
 * 3.一边是string一边是number，把string转换为number再进行比较
 *
 * 4，其他情况P50
 */
