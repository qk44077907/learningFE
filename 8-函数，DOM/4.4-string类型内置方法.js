/**
 * string类型内置方法
 */
var a = ' Hello,JavaScript';
console.log(
    a.length
);
console.log(
    a.charAt(2)
);
console.log(
    a.charCodeAt(2)
);
console.log(
    a.indexOf('S')
);
console.log(
    a.toLowerCase()
);
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
);


/**
 * 以上所有方法都不会改变原有变量储存的字符串，
 */