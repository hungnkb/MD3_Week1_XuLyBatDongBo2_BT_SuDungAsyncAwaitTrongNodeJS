async function checkArr(arr) {
    if (arr instanceof Array) {
        return arr
    } else {
        throw new Error('Input must be an array')
    }
}


function findMax(arr) {
    let max = 0;
    for (let i of arr) {
        if (max < i) {
            max = i;
        }
    } return max;
}

async function printAll(arr) {
    try {
        let checkResult = await checkArr(arr)
        await console.log(findMax(checkResult))
    }
    catch(err) {
        console.log(err)
    }
}

printAll(1)