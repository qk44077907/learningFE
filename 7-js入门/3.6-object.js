/** ES5中六种数据类型 **/


/**
 * 6.object
 */

/**
 * 1.前五种类型属于基本类型，对象属于引用类型（影响赋值的方式，稍后解释）
 * 2.对象（键值对，哈希表，散列表，字典）
 */


/**
 * 创建一个对象，对象的key值是一个字符串常量，存取对应key下的value使用‘.’，使用变量来传key值时使用[]
 */
var a={};
a.x='1';
a.y=2;
a.z=true
console.log(a.x);
var prop='x';
a[prop]='123';
console.log(a.x);


//等同于
a={
    x:'1',
    y:2,
    z:true
};
console.log(a.x);
/**
 * 数组，一个有序的数据集合
 */
var b=[];
b[0]='1';
b[1]=2;
b[3]=false

//等同于
b=['1', 2, true];
console.log(b[0]);