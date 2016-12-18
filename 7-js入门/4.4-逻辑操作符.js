/**
 * !,&&,||（非，与，或）
 */


/**
 * 逻辑非（取反）
 * 先对不是boolean类型的值进行隐式转换，然后取反
 * NaN,null,undefined,0,空字符串 => 转换后返回false => 取反返回true
 * 其他不是boolean类型的值 => 转换后返回true => 取反返回false
 * 例子：
 */
var a = {
    t1: !NaN,
    t2: !null,
    t3: !undefined,
    t4: !0,
    t5: !'',
    t6: !false
};
console.log(a);

/**
 * 逻辑与（且）
 * A && B （A且B为true）
 * 先将A转换为boolean值，false则返回A，true则返回B
 * 例子：
 */
console.log(
    1 && null,
    null && {},
    '' && {},
    {} && 1
);

/**
 * 逻辑或（或）
 * A || B （A或B为true）
 * 先将A转换为boolean值，true则返回A，false则返回B
 * 例子：
 */
console.log(
    1 || null,
    null || 1,
    '' || {},
    {} || 1
);

