### 常用正则总结
+ g 就是匹配所有的
```javascript
var str = 'abcda'
var reg = /a/
console.log(str.replace(reg,'A')) //Abcda
var reg2 = /a/g
console.log(str.replace(reg2,'A')) //AbcdA
```
+ i 不区分大小写
```javascript
var str = 'aBc'
var reg = /b/
console.log(str.match(reg)) //null
var reg2 = /b/i
console.log(str.match(reg2).index) //1
```
+ . 任意字符
匹配除换行符 \n 之外的任何单字符
+ \d 数字
[0-9]
+ \D 非数字
匹配非数字的所有字符 [^0-9]
+ \w 英文 数字 下划线
[a-z0-9_]
+ \W
[^a-z0-9_] 非英文 数字 下划线
+ \s 空格字符
+ \S 非空格
+ []
[abc] 其中的任意一个字符
```javascript
var str = 'rcp acp bcp dcp ccp ecp'
var reg = /[abc]cp/g
console.log(str.match(reg)); //["acp", "bcp", "ccp"]
```
[0-9]、[a-z] 确定一个范围
```javascript
// 只允许输入1到9的数字
var reg = /^[1-9]+$/;
console.log(reg.test('1563855577')); //true
console.log(reg.test('0177')); //false
console.log(reg.test('')); //false
```
[^05] 排除匹配字符
```javascript
// 不能输入包含0或5的字符
var reg = /^[^05]+$/
console.log(reg.test('01')); //false
console.log(reg.test('015')); //false
console.log(reg.test('234')); //true
console.log(reg.test('34abc')); //true

//踩坑 字面量创建的表达式始终会共享一个RegExp实例 在开启全局标记（g）的情况下，在参数相同的前提下多次调用test方法会返回不同的结果
//详解见：js红宝书 p105 p106
var reg2 = /^[^05]+$/g
console.log(reg2.test('234')); //true
console.log(reg2.test('234')); //false

```
+ () 表示一个块
```javascript
//正确配一个座机号，区号可填可不填
var reg = /^(0\d{2,3}-)?\d{7,8}$/
console.log(reg.test('010-62276688')); //true
console.log(reg.test('62276688')); //true
```
+ ^
行首（字符串的头部）
+ $
行尾（字符串的尾部）
+ | 或
```javascript
var str = 'rcp acp bcp dcp ccp ecp'
var reg = /[a|b|c]cp/gi;;
console.log(str.match(reg)); //["acp", "bcp", "ccp"]
```

#### 量词
+ {n}   正好出现n次 （一次不多一次不少）
+ {n,m} 最少n次 最多m次 （确定一个上下限）
+ {n,}  最少n次 最多不限
+ '+'   相当于{1,}  -->最少1次 最多不限
+ ?     相当于{0,1} -->也就是可有可无
+ '*'     相当于{0,}  -->也就是0次或多次 不推荐使用

#### 贪婪 （* +）
就是去匹配尽可能长的字符串
```javascript
var html = '<div class="div">我是一个div标签--- <p style="">我是div标签中的p标签--- <span>我是p标签中的span标签.</span></p></div>'
//去掉上面字符串中的所有html标签
// html 标签是由'<' + 中间任意字符 + '>' 组成 --->  '<任意字符>'
var reg = /<.+>/gi;
console.log(html.replace(reg,'')) // '' 由于贪婪的原因匹配到的是字符串html行首的'<' + 中间的任意字符 + 行尾的'>'

// '<任意字符>' 中间不是任意字符, '<非<>的任意字符>'
var reg2 = /<[^<>]]+>/gi;
console.log(html.replace(reg2,'')) //我是一个div标签--- 我是div标签中的p标签--- 我是p标签中的span标签.

// 通过 ? 转换为非贪婪
var reg3 = /<.+?>/gi;
console.log(html.replace(reg3,'')) //我是一个div标签--- 我是div标签中的p标签--- 我是p标签中的span标签.
```