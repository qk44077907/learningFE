/**
 * 没有声明的变量称为自由变量
 */
var a=10,
    b=20;
function fn() {
    var a=100,
        c=300;
    console.log(a,c);
    function bar() {
        var a=1000,
            d=4000
    }
}

bar();