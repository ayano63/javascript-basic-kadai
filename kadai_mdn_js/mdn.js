function addOneWeek(myDate) {
    return myDate.setDate(myDate.getDate());
}
var today = new Date();
var oneWeekFromNow = addOneWeek(today);
 
console.log(today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日");


