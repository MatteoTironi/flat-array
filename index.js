

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
    for (let i = 0; i < array.length; i++) {
        //il valore a quella posizione è un array?
        if (Array.isArray(array[i])) {
            //l'array è maggiore di uno?
            if (array[i].length > 1) {
                let subArray = []
                for (let j = 0; j < array.length; j++) {
                    subArray = [...array[i]]
                }
                res.push(...subArray);
            }
            res = [...res, ...array[i]]
        }
        if (!Array.isArray(array[i]))
            res = [...res, array[i]]
    }
    return res;

}
flatArray([1, [29], [67, [7, [57], 5]]])

//[67,[7 ,[57] ,5]]

function sum(arr) {
  // your code here...
}

module.exports = flatArray;
