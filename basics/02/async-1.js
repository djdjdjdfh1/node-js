// 중간에 시간 걸리는 작업이 있을 경우  (결과 비교: 02\results\async-1.js)
function displayA() {
    console.log('A');
}
function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000)

}
function displayC() {
    console.log('C');
}

displayA();
displayB(displayC);