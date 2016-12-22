/**
 * 定义函数:函数声明 函数表达式
 */

/**
 * 函数声明，具名函数。可以把函数名当成变量一样使用，使用函数声明的方式定义函数可以后定义函数。（声明提升）
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
 * 调用函数：
 * 1.直接调用函数：函数名后面加上一对括号，括号内是传给函数的参数
 * 2.未完待续
 */
test1();


/**
 * 对象的属性如果是函数，这个属性也被成为这个对象的方法
 *
 * 对象的属性名不会与外界发生冲突，一个专门用来储存属性和方法的对象也被称之为命名空间
 */
var a={};
a.test1=test1; //注意test1是储存函数的变量，不要加括号，否则会变成调用
a.test1();