/**声明变量
 *  var关键字  变量名
 */
var a;

/**
 * 为变量赋值
 */
a=1;
console.log(a);



/**同一个作用域内的变量的名字不能重复，否则声明无效，先声明再使用，就近声明*/
var b=2;
console.log(b);


/**可以用一个var关键字，多个变量依次声明，用逗号分隔**/
var c=10,d,e=20;
console.log(c, d, e);


