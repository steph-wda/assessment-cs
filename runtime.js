const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

/*Array Name  |  doublerAppend Runtime  |  doublerInsert Runtime
-------------------------------------------------------------
tinyArray             114.4 μs                 33.2 μs
smallArray            125.7 μs                 58.3 μs
mediumArray           171 μs                   224.4 μs
largeArray            758.2 μs                 12.8197 ms
extraLargeArray       3.5998 ms             1.0964766s                   

*/

/*Looking over the results, it appears that the doublerInsert function had a faster runtime with the tiny and small arrays. With the medium, large and extra large arrays, the doublerAppend function had a faster runtime. As the size of the array increase the doublerAppend function has a better runtime. The reason for this is because the doublerInsert function is using the unshift method whereas the doublerAppend is using the push method.

With unshift, a number is added onto the front of an array. This means that for each insert the elements behind the newly inserted element also need to be shifted one over to the right. With tiny and small arrays, the runtime is quick, but as the arrays grow the function is slowed down because it has to deal with the new element and all of the elements that were already in the array. The push method is faster because it is only dealing with one element (adding that new element to the end of the array). The rest of the array is untouched. */

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(textraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
