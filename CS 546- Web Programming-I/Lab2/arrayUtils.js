function ArrayExists(arr)
{
    if(typeof Array == 'undefined')
    {
        throw "Array does not exist";
    }
}
function IfArray(arr)
{
    if(!Array.isArray(arr))
    {
        throw "Not an array";
    }
}
function IfArrayIsNotEmpty(arr)
{
    if(Array.length==0)
    {
        throw "array is empty";
    }
}
function IfIndexisWithinBounds(Array,index)
{
    if(index<0 || index>=Array.length)
    {
        throw "Index out of bounds";
    }
}
function EndNumberExists(n)
{
    if(typeof n==null || typeof n == 'undefined')
    {
        throw "End number doesn't exists";
    }
}
const head = function head(arr)
{
    ArrayExists(arr);
    IfArray(arr);
    IfArrayIsNotEmpty(arr);
    return arr[0];
}
const last = function last(arr)
{
    ArrayExists(arr);
    IfArray(arr);
    IfArrayIsNotEmpty(arr);
    return arr[arr.length-1]
}
const remove = function remove(arr,index)
{
    ArrayExists(arr);
    IfArray(arr);
    IfArrayIsNotEmpty(arr);
    IfIndexisWithinBounds(arr,index)
    let ind = index;
    let answer = [];
    while(ind<arr.length)
    {
        arr[ind]=arr[ind+1];
        ind++;
    }
    let j=0;
    while(j<arr.length-1)
    {
        answer[j]=arr[j];
        j++;
    }
    return answer;
}
const range = function range(end,value)
{
    let i=0, output=[],j=0;
    if(typeof end == 'undefined')
    {
        throw "End doesn't exists";
    }
    if(!Number.isInteger(end))
    {
        throw "Value is not a number";
    }
    if(end<0)
    {
        throw "Not positive";
    }
    while(i<end)
    {
        output[i]=i;
        i++;
    }
    if(value!=null)
    {
        while(j<end)
        {
            output[j]=value;
            j++;
        }
    }
    return output;
}
const countElements = function countElements(arr)
{
    ArrayExists(arr);
    IfArray(arr);
    let i=0;
    const map = new Object();
    while(i<arr.length)
    {
        if(map.hasOwnProperty(arr[i]))
        {
            map[arr[i]]++;
        }
        else{
            map[arr[i]]=1;
        }
        i++
    }
    return map;
}

const isEqual = function isEqual(arrayOne,arrayTwo)
{
    ArrayExists(arrayOne);
    ArrayExists(arrayTwo);
    IfArray(arrayOne);
    IfArray(arrayTwo);
    let i=0,j=0;
    if(arrayOne.length!=arrayTwo.length) return false;
    while(i<arrayOne.length && j<arrayTwo.length)
    {
        if(arrayOne[i]!==arrayTwo[j]) return false;
        i++;
        j++;
    }
    return true;
}

module.exports = {
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};