function stringUndefined(input)
{
    if(input==null)
    {
        throw "String doesn't exists";
    }
}
function ifString(input)
{
    if(typeof input != 'string')
    {
        throw "Not a string";
    }
}
function ifNumberExists(n)
{
    if(typeof n == null || typeof n == 'undefined')
    {
        throw "Number doesn't exists";
    }
}
const capitalize= function capitalize(input)
{
    stringUndefined(input);
    ifString(input);
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
const repeat = function repeat(input,num)
{
    let newinput = '';
    stringUndefined(input);
    ifString(input);
    ifNumberExists(num);
    if(num<0)
    {
        throw "Value is not positive";
    }
    while(num!=0)
    {
        newinput+=input;
        num--;
    }
    return newinput;
}
const countChars=function countChars(input)
{
    stringUndefined(input);
    ifString(input);
    const map = new Object();
    let i=0;
    while(i<input.length)
    {
        if(map.hasOwnProperty(input.charAt(i)))
        {
            map[input.charAt(i)]++;
        }
        else
        {
            map[input.charAt(i)]=1;
        }
        i++;
    }
    return map;
}
    module.exports = 
{
    capitalize,
    repeat,
    countChars
}