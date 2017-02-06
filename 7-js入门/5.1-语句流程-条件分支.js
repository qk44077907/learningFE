/**
 * if后面圆括号内传入值
 * boolean类型true则执行花括号的语句，false则跳过花括号内的语句
 * 不是boolean类型则执行隐式转换，转换规则参考逻辑非(!)
 */
var a;
a = 1;
if (a === 1) {
    console.log('if条件命中');
}
/**
 * switch
 */
var b;
b = 0;
switch (b) {
    case 0:
        console.log('b等于0');
        break;
    case 1:
        console.log('b等于1');
        break;
    /*case null&&0:
     console.log('test');
     break;*/
}