const inputContainer = document.getElementsByClassName('output-div')[0]

let expression = ''

/**
 * Data Types in Javascript
 * 1. String - e.g Names
 * 2. Number - e.g 1,2
 * 3. Float - e.g 1.234
 * 4. Boolean - i.e True and False
 */

function press(num) {

    expression += num;
    inputContainer.value = expression

}

const equal = function(){
    try {

        const result = eval(expression)
        inputContainer.value = result !== undefined ? result: 'Error'
        expression = ''

    } catch(e){
        inputContainer.value = 'error'
    }
}

const erase = function(){
    expression = ''
    inputContainer.value = expression
}