# num2capital
阿拉伯数字转换成中文汉字和人民币汉字

> 引入介绍（Introduction）

num2Capital主要用于阿拉伯数字转换成中文大写或转换成RMB人民币大写  

> 参数说明（Parameter description）

```html

第一个参数为 要转换的目标数字(可为string类型) 

第二个参数为 cn_capital 或者 rmb_capital  默认 cn_capital

```
> 注
```html
1 rmb格式未添加 "整"字 
2 rmb格式采用 ”圆“ 字
```

```javascript
npm i num2capital
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../dist/num2Capital.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>

</body>
<script type="text/javascript">
    const cn1 = numberUitl.num2Capital(123)
    const cn2 = numberUitl.num2Capital(123,'cn_capital')
    const rmb = numberUitl.num2Capital(123,'rmb_capital')
    console.info(cn1)  //  一百二十三
    console.info(cn2)  //  一百二十三
    console.info(rmb)  //  壹佰贰拾叁圆
</script>
</html>

```  

```javascript
const numberUitl =require('../index')
const cn1 = numberUitl.num2Capital(123)
const cn2 = numberUitl.num2Capital(123,'cn_capital')
const rmb = numberUitl.num2Capital(123,'rmb_capital')
console.info(cn1)  //  一百二十三
console.info(cn2)  //  一百二十三
console.info(rmb)  //  壹佰贰拾叁圆
```
