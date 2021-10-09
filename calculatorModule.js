let calculatorModule = (() => {
    let expression = []
    let map = new Map();

    let sum = (n1, n2) => +n1 + +n2
    let subt = (n1, n2) => +n1 - +n2
    let mult = (n1, n2) => +n1 * +n2
    let div = (n1, n2) => +n1 * +n2

    const operators = {
        '+': sum,
        '-': subt,
        '*': mult,
        '/': div
    }

    const saveOperations = (arr, result) => map.set(arr.join(''), result)

    const enter = expressionValue => {
        expression.push(expressionValue)
    }

    const equals = () => {
        const [n1, op, n2] = expression;
        const result = operators[op](n1, n2)

        saveOperations(expression, result)
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