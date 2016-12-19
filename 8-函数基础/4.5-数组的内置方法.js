/**
 * 数组的内置方法
 */
var a = ['How', 'are', 'you'];
console.log(
    a.length
);
console.log(
    a.indexOf('are')
);
/**
 * 以下方法 会 改变原数组，方法的返回值按需使用
 */

a.push('火车尾', 100);//返回执行后a.length
console.log(a);

a.pop(); //返回最后一个元素
console.log(a);

a.unshift(20, 50, '火车头'); //返回执行后a.length

a.shift(); //返回第一个元素
console.log(a);

a.reverse();//返回逆序后的数组
console.log(a);

a.sort(); //返回排序后的数组，默认使用元素的编码值进行排序
console.log(a);

// splice(开始下标, 删除个数，插入元素(可以多个)）
a.splice(2, 1, '插入的新元素'); //返回被删除的元素组成的数组
console.log(a);


/**
 * 以下方法 不会 改变原数组，通常使用它的返回值
 */
console.log(
    a.concat([2,7])
);

console.log(
    a.join('~~')
);

console.log(
    a.slice(2)
);


/**
 * 以下方法会迭代操作数组的每个元素，不会改变原数组
 */
a.forEach(function (value, index) {
    console.log(value, index);
});


//过滤并返回一个新数组，参数需要传一个函数，函数需要返回boolean值
var b = a.filter(function (value) {
    return typeof value === "string" && (value.indexOf('车') > -1)
});
console.log(b);


//映射并返回一个新数组，参数需要传一个函数，函数需要返回映射后的值
var c=a.map(function (value) {
    return value+'---'
});
console.log(c);


var isAllString = a.every(function (value) {
    return typeof value === 'string'
});
console.log(isAllString);

var isSomeString = a.some(function (value) {
    return typeof value === 'string'
});
console.log(isSomeString);



/*
 console.log(
 a.toUpperCase()
 );
 console.log(
 a.trim()
 );
 console.log(
 a.concat('! How are you')
 );
 console.log(
 a.slice(2) //截取字符串，推荐使用slice(),其他两种方法为substr()和substring()，大同小异
 );
 console.log(
 a.split(',')
 );*/
