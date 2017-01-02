/**
 * 函数在定义时圆括号内的变量被称为函数的形数，用逗号“，”分隔；
 * 被调用时圆括号内传入的参数叫实参，同样用逗号“，”分隔。
 *
 * 形参是函数体内的变量，可以理解为先为函数被调用时传入的实参占个位置，做个标记。如此一来，函数在被定义时函数体内就可以根据变量名来说明要怎么操作这些值
 */

/**
 * 函数在被调用时从左到右一一对应传入实参。
 */
function test1(a,b,c,d) {
    console.log('a的值为：'+a);
    console.log('b的值为：'+b);
    console.log('c的值为：'+c);
    console.log('d的值为：'+d);
}
/**
 * JS里对函数传入的实参的类型与个数没有限制
 */

test1(3);


/**
 * 函数体内可以使用return结合条件判断语句起到提前结束函数体
 */



/**
 * 另外return结合赋值，可将值返回给外界
 */
function test2(a) {
    console.log('函数test2被调用！');
    return 10
}
var a={};
a.test2=test2();  //注意区分a.test2=test2
console.log(a.test2);
