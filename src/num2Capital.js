const num2Capital = function(n,type = 'cn_capital'){
    if(type === 'cn_capital'){
        if(n == 0){return '零'}
        for ( let i = n.length - 1; i >= 0; i--) {
            n = n.replace(",", "")//替换Num中的“,”
            n = n.replace(" ", "")//替换Num中的空格
        }
        if (isNaN(n)) { //验证输入的字符是否为数字
            //alert("请检查小写金额是否正确");
            return;
        }
        //字符处理完毕后开始转换，采用前后两部分分别转换
        let part = String(n).split(".");
        let newchar = "";
        //小数点前进行转化
        for (let i = part[0].length - 1; i >= 0; i--) {
            if (part[0].length > 10) {
                //alert("位数过大，无法计算");
                return "";
            }//若数量超过拾亿单位，提示
            let tmpnewchar = ""
            let perchar = part[0].charAt(i);
            switch (perchar) {
                case "0": tmpnewchar = "零" + tmpnewchar; break;
                case "1": tmpnewchar = "一" + tmpnewchar; break;
                case "2": tmpnewchar = "二" + tmpnewchar; break;
                case "3": tmpnewchar = "三" + tmpnewchar; break;
                case "4": tmpnewchar = "四" + tmpnewchar; break;
                case "5": tmpnewchar = "五" + tmpnewchar; break;
                case "6": tmpnewchar = "六" + tmpnewchar; break;
                case "7": tmpnewchar = "七" + tmpnewchar; break;
                case "8": tmpnewchar = "八" + tmpnewchar; break;
                case "9": tmpnewchar = "九" + tmpnewchar; break;
            }
            switch (part[0].length - i - 1) {
                case 0: tmpnewchar = tmpnewchar; break;
                case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
                case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
                case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
                case 4: tmpnewchar = tmpnewchar + "万"; break;
                case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
                case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
                case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
                case 8: tmpnewchar = tmpnewchar + "亿"; break;
                case 9: tmpnewchar = tmpnewchar + "十"; break;
            }
            newchar = tmpnewchar + newchar;
        }
        //替换所有无用汉字，直到没有此类无用的数字为止
        while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
            newchar = newchar.replace("零亿", "亿");
            newchar = newchar.replace("亿万", "亿");
            newchar = newchar.replace("零万", "万");
            newchar = newchar.replace("零零", "零");
        }
        //替换以“一十”开头的，为“十”
        if (newchar.indexOf("一十") == 0) {
            newchar = newchar.substr(1);
        }
        //替换以“零”结尾的，为“”
        if (newchar.lastIndexOf("零") == newchar.length - 1) {
            newchar = newchar.substr(0, newchar.length - 1);
        }
        return newchar;
    }else if (type === 'rmb_capital'){
        let fraction = ['角', '分'];
        let digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ];
        let unit = [
            ['圆', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        let head = n < 0 ? '负' : '';
        n = Math.abs(n);
        let s = '';
        for (let i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (let i = 0; i < unit[0].length && n > 0; i++) {
            let p = '';
            for (let j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零圆/, '圆')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零')
            .replace(/整/g, '');
    }else{
        return '目标类型转换错误'
    }
}


module.exports = num2Capital;
