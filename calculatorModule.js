let calculatorModule = (() => {
    let expression = []
    let map = new Map();

    const sum = (n1, n2) => +n1 + +n2
    const subt = (n1, n2) => +n1 - +n2
    const mult = (n1, n2) => +n1 * +n2
    const div = (n1, n2) => n2 !== 0 ? +n1 / +n2 : 'can\'t divide by zero'

    const operators = {
        '+': sum,
        '-': subt,
        '*': mult,
        '/': div
    }

    const saveOperations = (arr, result) => map.set(arr.join(''), result)

    const enter = expressionValue => {
        (typeof expressionValue == 'number' || ["+", "-", "*", "/"].includes(expressionValue)) ?
        expression.push(expressionValue): console.log('Invalid entry! It should be a number or a math operator!')
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

const calculator = calculatorModule