/**
 * 定义函数:函数声明 函数表达式
 */
/**
 * 函数声明，具名函数
 */
function test1() {
console.log('函数test1被调用！');
}

/**
 * 函数表达式，通常使用匿名函数赋值
 */
var test2=function () {
    console.log('函数test2被调用！')
}

/**
 * 直接调用函数
 */
test1();


/**
 * 对象的属性如果是函数，这个属性也被成为这个对象的方法
 */
var a={};
a.test1=test1;
a.test1();