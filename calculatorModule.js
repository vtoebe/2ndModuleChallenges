let calculatorModule = (() => {
    let expression = []
    let map = new Map();

    const operators = {
        '+': (n1, n2) => +n1 + +n2,
        '-': (n1, n2) => +n1 - +n2,
        '*': (n1, n2) => +n1 * +n2,
        '/': (n1, n2) => +n1 / +n2
    }

    const getOperator = arr => arr.filter(item => ["+", "-", "*", "/"].includes(item))
    const saveOperations = (arr, result) => map.set(`${arr.join('')}`, result)

    const enter = expressionValue => {
        expression.push(expressionValue)
    }

    const equals = () => {
        let arr = expression;
        const result = operators[getOperator(arr)](arr[0], arr[2])
        saveOperations(arr, result)
        expression = []
        return result;
    }

    const list = () => console.log(map);
    const reset = () => map.clear();

    return {
        enter,
        equals,
        list,
        reset
    }
})()