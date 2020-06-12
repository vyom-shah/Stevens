var axios = require("axios")
const wheredo = async function wheredo(firstName,lastName)
//async function wheredo(firstName,lastName)
{
    if(firstName == undefined && lastName == undefined)
        throw "First and Last name doesn't exists";
    let success = false;
    const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
    for(var i in data)
    {
        if(data[i]['firstName'] == firstName && data[i]['lastName'] == lastName)
        {
            //throw "no work available for the person";
            success = true;
            let ssn = data[i].ssn; 
            //console.log(ssn); 
            return ssn; 
        } 
    }
    if(!success)
        throw "Person doesn't exists in the list";
}
const whereDoTheyWork = async function whereDoTheyWork(firstName,lastName)
{
    if(firstName == undefined || lastName == undefined)
        throw("First or Last name doesn't exists");
    if(typeof firstName!='string' || typeof lastName!='string')
        throw "First or Last name is not string"

    let ssn1 = await wheredo(firstName,lastName);
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    for(var i in data)
    {
        if(data[i].ssn == ssn1) 
        {
            //console.log(firstName); 
            return firstName+" "+ lastName+" - "+data[i]['jobTitle']+ " at "+data[i]['company']+"."
            +(data[i]['willBeFired']?"They will be fired":"They will not be fired"); 
        }
    }   
}
const hip = async function hip(ip)
//async function hip(ip)
{
    let ipData = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json');
    for(var i in ipData.data)
    {
        if(ipData.data[i].ip == ip)
        {
            return ipData.data[i].ssn
        }
    }
}
const findTheHacker = async function findTheHacker(ip)
{
    if(ip == undefined)
        throw "Ip doesn't exists";
    if(typeof ip!='string')
        throw "not a string"
    let success=false;
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';  //referred from developer.moozilla.org and w3schools.com/js_regexp 
    const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
    if(!regex.test(ip))
    {
        throw "Ip not valid";
    }
    let ssn = await hip(ip);
    let ipData = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    for(var i of ipData.data)
    {
        if(i.ssn == ssn)
        {
            success = true;
            return i.firstName+" "+i.lastName+" is the hacker!";
        }
    }
    if(!success)
    {
        throw "Found nothing";
    }
}
module.exports={
    whereDoTheyWork,
    findTheHacker
}