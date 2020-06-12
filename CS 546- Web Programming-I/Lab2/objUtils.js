function undefinedObject(object){
    if(typeof object == 'undefined')
     throw "Undefined object error";
}
const extend = function extend(...args)
{
    let normalArray = args;
    if(args.length<=1)
    {
        throw "Parameters less than 2 not allowed";
    }
    let output = new Object();
    undefinedObject(args);
    for(i of args)
    {
        var obj = i;        
        Object.keys(obj).forEach(function(key)
        {
            if(!output.hasOwnProperty(key))
            {
                output[key]=obj[key];
            }
        });
    }
    return output;
}
const smush = function smush(...args)
{
    //let normalArray = args;
    if(args.length<=1)
    {
        throw "Less Parameters";
    }
    if(typeof(args) == "object" && args != undefined)
    {
        const Val=Object.assign(...args); //referred from Stackoverflow
        return Val;
    }
    else throw "Error";
}

const mapValues = function mapValues(object, funct)
{
    if(typeof object != 'object')
    {
        throw "Object is not defined"
    }
    if(typeof funct !='function')
    {
        throw "Function is not defined";
    }
    for(var i in object)
    {
        object[i] = funct(object[i]);
    }
    return object;
}
module.exports = 
{
    extend,
    smush,
    mapValues
}