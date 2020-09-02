let year;
let month;
let day;

function mainFunction(txt){
    if (lengthFunction(txt)==true && punctuationFunction(txt)==true && yearFunction(txt)==true && monthFunction(txt)==true && dayFunction(txt)==true){
        return true;
    }
    return false;
    ;
}

function lengthFunction(txt){
    if (txt.length==10){
        return true;
    }
    return false;

}
function punctuationFunction(txt){
    if (txt.charAt(2)==="." && txt.charAt(5)==="."){
        return true;
    }
    return false;
}
function yearFunction(txt){
    year = txt.substr(6,4);
    if (isNaN(year)==true){return false};
    return true;
}
function monthFunction(txt){
    month = txt.substr(3,2);
    if (isNaN(month)==true){return false};
    if (month>12||month<1){return false;};
    return true;
}
function dayFunction(txt){
    day = txt.substr(0,2);
    if (isNaN(day)==true){return false};
    if (day<1){return false};
    if (day=='31'&&(month=='01'||month=='03'||month=='05'||month=='07'||month=='08'||month=='10'||month=='12')){
        return true;
    }
    if (day<='30'&&month!='02'){return true;};
    if (day=='29' && isLeapYear(year)){
        return true;
    };
    if (day<='28'){return true;};
    return false;
    }

function isLeapYear(yearpar)
    {
      return ((yearpar % 4 == 0) && (yearpar % 100 != 0)) || (yearpar % 400 == 0);
    }

