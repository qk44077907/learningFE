/**加，减，乘，除，取余*/

var a;
a=20+20;
console.log(a);

a=a-10;
console.log(a);

a=a*2;
console.log(a);

a=a/3;
console.log(a);

a=a%7;
console.log(a);

/**自增自减*/

console.log(a++);//等同于a=a+1，返回a加1之前的值
console.log(++a);//等同于a=a+1，返回a加1之后的值

console.log(a--);//等同于a=a+1，返回a加1之前的值
console.log(--a);//等同于a=a-1，返回a加1之后的值

/**算术操作符结合赋值操作符*/

var b=10;

b+=10;//等同于b=b+10

b-=10;//等同于b=b-10

b/=10;//等同于b=b/10

b*=10;//等同于b=b*10

b%=10;//等同于b=b%10

/**不要直接对浮点值进行运算*/

console.log(1.5+0.1+0.1);

/**正确的做法：小数化为整数最后还原*/

console.log((1.5*10+0.1*10+0.1*10)/10);