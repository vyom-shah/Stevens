
const people = require("./people.js");
const weather= require("./weather.js");
const work = require("./work.js");

async function main(){

    try{
        const peopledata = await people.getPersonById(43);
        console.log(peopledata);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const peopledata = await people.getPersonById(-1);
        console.log(peopledata);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const peopledata = await people.getPersonById(1000);
        console.log(peopledata);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const peopledata = await people.getPersonById();
        console.log(peopledata);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const printlex = await people.lexIndex(2);
        console.log(printlex);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const printlex = await people.lexIndex(-1);
        console.log(printlex);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const printlex = await people.lexIndex(1000);
        console.log(printlex);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const printlex = await people.lexIndex();
        console.log(printlex);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const fnamematrix = await people.firstNameMetrics();
        console.log(fnamematrix);
    }
    catch(e)
    {
        console.log(e);
    }

/////////////////////////////////////////////////////////////////////////////

    try{
        const go = await weather.shouldTheyGoOutside("Scotty","Barajaz");
        console.log(go);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const go1 = await weather.shouldTheyGoOutside("Calli","Ondrasek");
        console.log(go1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const go1 = await weather.shouldTheyGoOutside("Kewal","Kothari");
        console.log(go1);
    }
    catch(e)
    {
        console.log(e);
    }
    
///////////
    try{
        const go1 = await weather.shouldTheyGoOutside()
        console.log(go1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const go1 = await weather.shouldTheyGoOutside("Bob")
        console.log(go1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const go1 = await weather.shouldTheyGoOutside("Bob","Smith")
        console.log(go1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const work2 = await work.whereDoTheyWork("Demetra","Durrand");
        console.log(work2);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const work1 = await work.whereDoTheyWork("Hank","Tarling");
        console.log(work1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const work1 = await work.whereDoTheyWork();
        console.log(work1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const work1 = await work.whereDoTheyWork("Bob");
        console.log(work1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const work1 = await work.whereDoTheyWork("Bob","Smith");
        console.log(work1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const hack1 = await work.findTheHacker("79.222.167.180");
        console.log(hack1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const hack1 = await work.findTheHacker("111.111.222.222");
        console.log(hack1);
    }
    catch(e)
    {
        console.log(e);
    }
    try{
        const hack1 = await work.findTheHacker("foobar");
        console.log(hack1);
    }
    catch(e)
    {
        console.log(e);
    }try{
        const hack1 = await work.findTheHacker();
        console.log(hack1);
    }
    catch(e)
    {
        console.log(e);
    }


}



main(); 