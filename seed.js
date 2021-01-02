const { green, red } = require("chalk");
const { db, Apple, Orange } = require("./server/db");

//Apples

const seed = async () => {
  try {
    await db.sync({ force: true });

    const Gala = await Apple.create({
      type: "Gala",
      origin: "USA",
      amount: 9,
    });

    const Braeburn = await Apple.create({
      type: "Braeburn",
      origin: "Ireland",
      amount: 8,
    });

    const PinkLady = await Apple.create({
      type: "Pink Lady",
      origin: "Australia",
      amount: 8,
    });

    //Oranges
    const Florida = await Orange.create({
      type: "Florida",
      amount: 3,
      origin: "USA",
    });

    const Navel = await Orange.create({
      type: "Navel",
      amount: 5,
      origin: "Guatemala",
    });
    const Valencia = await Orange.create({
      type: "Valencia",
      amount: 10,
      origin: "Australia",
    });

    await Gala.addOrange(Florida);
    await PinkLady.addOrange(Valencia);

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("No fruit! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
