module.exports = function check(str, bracketsConfig) {
    const openCharStr = bracketsConfig.map(val => val[0]).join('');
    const closeCharStr = bracketsConfig.map(val => val[1]).join('');
    let newArr = [];
    for (let i of str) {
        if (openCharStr.includes(i) && !closeCharStr.includes(i)) {
            newArr.push(i);
        } else if (closeCharStr.includes(i) && !openCharStr.includes(i)) {
            let openIndex = closeCharStr.indexOf(i);
            if (openCharStr[openIndex] === newArr[newArr.length - 1]) {
                newArr.pop();
            } else return false;
        } else if (openCharStr.includes(i) && closeCharStr.includes(i)) {
            if (i === newArr[newArr.length - 1]) {
                newArr.pop();
            } else
                newArr.push(i);
        }
    }
    return newArr.length === 0;
};
