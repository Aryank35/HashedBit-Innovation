// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, opt, num2){
    switch(opt){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2          
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Can't be divided by zero!"
            }
        default:
            return 'Invalid operator!'
    }
}