

/**
 * # flat-array

Write a function which takes an array as argument. The latter can contain nested arrays.
Return a flat array containing all the elements of the array.

```
function flatArray(arr) {
    // ...
}

flatArray([1,2,3,[4],[5,6,[7]]])
```

The expected result is: `[1,2,3,4,5,6,7]`

## Extra

Write tests using `Jest`
 */

function flatArray(array, res = []) {
    if (array === undefined || array === null || typeof array === "string") {
        return res = [];
    }
    else {
        for (let i = 0; i < array.length; i++) {
            //il valore alla posizione i è un array?
            if (Array.isArray(array[i])) {
                flatArray(array[i], res)
            }
            else {
                res.push(array[i])
            }
        }
        return res;
    }

}

flattingArray([1, 2, [5, [7]], 5])

function flatArray(array) {

    for (var i = 0; i < array.length; i++) {

        if (array[i] instanceof Array) {

            Array.prototype.splice.apply(array, [i, 1].concat(array[i]))
            i--;
        }

    }

    return array;
}


/**
 * Per funzionare correttamente, la funzione ricorsiva deve ridurre ai minimi termini i valori in ingresso, nell'esempio sotto 
 * l'array è stata ridotta al singolo valore 
 * 
 */

function sum(arr, res = 0) {
    if (arr.length > 0) {
        res = res + arr[0]
        arr.shift()
        sum(arr, res)
    }
    return res;
}

sum([1, 2, 3])


module.exports = flatArray;
