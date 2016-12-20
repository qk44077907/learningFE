/**
 * 作用域在定义时而非调用时确定
 */
var x=10;
function fn() {
    console.log(x);
}

function show(a) {
    var x=20;
    (function(){
        a()
    })()
}

show(fn);