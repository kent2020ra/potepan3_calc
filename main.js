'use strict'
// id = "result"
let result = document.getElementById("result");

// 数値の反映
function edit(elem) {
    result.value = result.value + elem.value;
}
// 空白に戻す
function calc() {
    result.value = new Function("return " + result.value)();
}
