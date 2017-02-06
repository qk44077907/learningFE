/**
 * for循环 (WebStorm快捷命令itar)
 */
for (var i = 0; i < obj.length; i++) {
    var obj1 = obj[i];

}

/**
 * do-while (先干再说)
 * while (三思而后行)
 */

var j = 0;
do {
    j++;
    console.log('第' + j + '次');
}
while (j <= 3);

var k = 0;
while (k <= 3) {
    k++;
    console.log('第' + k + '次');
}

/**
 * for-in，循环遍历对象的属性 (WebStorm快捷命令itin)
 */
var obj = {
    x: 1,
    y: 'js',
    z: true
};
