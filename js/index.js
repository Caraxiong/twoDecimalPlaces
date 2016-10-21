//保留两位小数
var changeTwoDecimal_f= function (floatvar){  
    var f_x = parseFloat(floatvar);  
    if (isNaN(f_x)){  
        return '0.00';  
    }  
    var f_x = Math.round(f_x*100)/100;  
    var s_x = f_x.toString();  
    var pos_decimal = s_x.indexOf('.');  
    if (pos_decimal < 0){  
        pos_decimal = s_x.length;  
        s_x += '.';  
    }  
    while (s_x.length <= pos_decimal + 2){  
        s_x += '0';  
    }  
    return s_x;  
}  
//金额公式计算方法
function transform(gold){
	var goldStr = gold+"";  
    var dian = goldStr.indexOf('.');
    var result = 0;  
    if(dian == -1){ 
    	//无小数点取整
        result =  Number(gold); 
    }else{  
        var decimals = goldStr.substring(dian+1,goldStr.length); 
        if(decimals.length >=3){  
        	if(Number(decimals.charAt(2))<=5){
            	result =  (Number(changeTwoDecimal_f(gold+0.01))); 
        	}else{
        		result =  Number(changeTwoDecimal_f(gold)); 
        	}
        }else{  
            result =  Number(changeTwoDecimal_f(gold)); 
        }  
    } 
	return result;
}
var fees = {
	fee1:0.03242,
	fee2:0.02222,
	fee3:0.0004,
	fee4:0.12345,
	fee5:0.06783,
	fee11:0.9832
}
var sumMoney = function(money){
	document.getElementById("totleM").innerText =  transform(transform((fees.fee1*100000000)*money/100000000)+transform((fees.fee2*100000000)*money/100000000)+transform((fees.fee3*100000000)*money/100000000)+transform((fees.fee4*100000000)*money/100000000)+transform((fees.fee5*100000000)*money/100000000)+transform((fees.fee11*100000000)*money/100000000));

	// window.location.reload();
	// document.getElementsByClassName("totleM").innerText 用class作为选择器无效
}
