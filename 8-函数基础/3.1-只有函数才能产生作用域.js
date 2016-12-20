/**
 * 只有函数才能产生作用域
 */
for (var i = 0; i<5; i++) {
    var obj=i
}
console.log(obj);//可以访问到obj

if (1){
    var a=0
}
console.log(a);//可以访问到a