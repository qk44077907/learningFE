/**
 * 关系操作符包括>，>=，<，<=，==，!=，===，!==，返回一个boolean值
 */
/**
 * 对于>，>=，<，<=，任何一边是NaN,null,undefined都返回false
 * 1.两边都是number
 * 2.两边都是string依次比较字符编码
 * 3.一边是string一边是number，把string转换为number再进行比较，
 *
 * 4，其他情况P50
 */
var a = 100, b = '1';
console.log(a > b);

var c = 'a100', d = 'A100';
console.log(c > d);


/**
 * 当两边类型不同时，相等操作符 == 会隐式转换两边类型，再进行比较，这会给代码带来隐患，实际代码中
 * 建议直接使用全等 ===，两边类型不同直接返回false
 * 无论全等还是相等操作符在比较引用类型时是比较的其引用是否相等
 *
 */
console.log(
    {x: 1} === {x: 1}
);

/**不要将浮点值进行比较*/
