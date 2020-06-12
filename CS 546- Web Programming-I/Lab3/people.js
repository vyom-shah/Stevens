const axios = require('axios');
function outOfBounds(id)
{
    if(id>500 || id<=0)
    {
        throw "Id out of bounds";
    }
}
function exists(id)
{
    if(id == undefined)
    {
        throw "Id doesn't exists";
    }
}
const getPersonById = async function getPersonById(id)
{
    outOfBounds(id);
    exists(id);
    if(typeof id == 'number')
    {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        for(var i in data)
        {
            for(var j in i)
            {
                if(data[i]['id']==id)
                {
                    return data[i]['firstName']+" "+data[i]['lastName'];
                }
            } 
        }
    }
    else
    {
        throw("Id is not a number");
    }
}
function compare(a,b)
{
    const LNA = a.lastName.toUpperCase();
    const LNB = b.lastName.toUpperCase();
    let compare = 0;
    if(LNA > LNB)
    {
        compare = 1;
    }
    else if(LNA < LNB)
    {
        compare = -1;
    }
    return compare;
}
const lexIndex = async function lexIndex(index)
{
    outOfBounds(index);
    exists(index);
    if(typeof index == 'number')
    {
        const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        Object.keys(data).forEach(function(key){
            data.sort(compare);
        });
        return data[index]['firstName']+" "+data[index]['lastName'];
    }
    else
    {
        throw("Index is not a number");
    }
}
const firstNameMetrics = async function firstNameMetrics()
{
    const {data} = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    if(data == undefined)
        throw "Undefined data"
    let sumOfAllLetters=0,sumOfAllVowels=0,sumOfAllConsonants=0,longestNameLength=0,shortestNameLength=1000,longestName="",shortestName="";
    Object.keys(data).forEach(function(key)
    {
        var firstName = data[key]['firstName'];
        if(firstName.length>longestNameLength)
        {
            longestNameLength=firstName.length;
            longestName=firstName;
        }
        if(firstName.length<shortestNameLength)
        {
            shortestNameLength=firstName.length;
            shortestName=firstName;
        }
        firstName=firstName.toLowerCase();
        for(var i of firstName)
        {
            if(!(i.toUpperCase()!=i.toLowerCase())){
                continue;
            }
            sumOfAllLetters++;
            if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
            {
                sumOfAllVowels++;
            }
            else
            {
                sumOfAllConsonants++;
            }
        }
    });
    var output = {
        'totalLetters':sumOfAllLetters,
        'totalVowels':sumOfAllVowels,
        'totalConsonants':sumOfAllConsonants,
        'longestName':longestName,
        'shortestName':shortestName
    }
    return output;
}
module.exports={
    getPersonById,
    lexIndex,
    firstNameMetrics
}