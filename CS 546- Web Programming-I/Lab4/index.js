const animals = require("./data/animals");
const connection = require("./mongoConnection");
const main = async () => {
    
        const Sasha = await animals.create( "Sasha","Dog");
        console.log(Sasha);
  
        const luccyy = await animals.create("Lucy", "Dog");
    
        const allMyAnimals = await animals.getAll();
        console.log(allMyAnimals);
    
        const Duke = await animals.create("Duke", "Walrus");
        console.log(Duke);
    
        const sashita= await animals.rename(String(Sasha._id),"Sashita");
        console.log(sashita);

        const Lucyb=await animals.remove(String(luccyy._id));
        console.log(Lucyb);

        const allMyAnimals1 = await animals.getAll();
        console.log(allMyAnimals1);
    
    const db = await connection();
    await db.serverConfig.close();

    console.log("Connection closed and Done!");
};

main().catch(error=>{
    console.log(error)
});
