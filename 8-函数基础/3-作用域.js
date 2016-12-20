/**
 * 没有用var声明的变量称为自由变量
 */
var a=10,
    b=20;
function fn() {
    var a=100,
        c=300;
    console.log(a);
    console.log(b);
    console.log(c);
    function bar() {
        var a=1000,
            d=4000
    }
}

bar();//报错，当前作用域中没有bar变量

