var axios = require("axios");
const name = async function name(firstName,lastName)
{
    let success = false;
    const {data} = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
    for(var i in data)
    {
        if(data[i]['firstName']==firstName && data[i]['lastName']==lastName)
        {
            if(data[i]['zip']==undefined)
            {
                throw "no zip code available for this person";
            }
            success = true;
            let zipcode = data[i]['zip'];
            return zipcode;
        }
    }
    if(!success)
        throw "person doesn't exists in people's list";
}
const shouldTheyGoOutside = async function shouldTheyGoOutside(firstName,lastName)
{
    if(firstName == undefined || lastName == undefined)
        throw "FirstName or LastName doesn't exist";
   // if(firstName == undefined && lastName == undefined)
   //     throw "FirstName and LastName doesn't exist";
    if(typeof firstName != 'string' || typeof lastName != 'string')
        throw "FirstName or the LastName is not string";
    let zipcode = await this.name(firstName,lastName);
    let weatherData = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json');
    for(var i in weatherData.data)
    {
        if(weatherData.data[i].zip == zipcode)
        {
            if(34 > parseInt(weatherData.data[i].temp))
            {
                return "No, "+firstName+" should not go outside";
            }
            else
            {
                return "Yes, "+firstName+" should go outside";
            }
        }
    }
}
module.exports={
    name,
    shouldTheyGoOutside
}