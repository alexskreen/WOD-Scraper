const typeorm = require("typeorm");

class Gym {
  constructor(id, date, wod) {
    this.id = id;
    this.date = date;
    this.wod = wod;
  }
}

const EntitySchema = require("typeorm").EntitySchema;

const GymSchema = new EntitySchema({
  name: "Gym",
  target: Gym,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    date: {
      type: "text",
    },
    wod: {
      type: "text",
    },
  },
});

async function getConnection() {
  return await typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "epicodus",
    database: "wodScraper",
    synchronize: true,
    logging: false,
    entities: [GymSchema],
  });
}

async function getAllGyms() {
  const connection = await getConnection();
  const gymRepo = connection.getRepository(Gym);
  const gyms = await gymRepo.find();
  connection.close();
  return gyms;
}

async function insertGym(wod, date) {
  const connection = await getConnection();

  // create
  const gym = new Gym();
  gym.date = date;
  gym.wod = wod;

  // save
  const gymRepo = connection.getRepository(Gym);
  const res = await gymRepo.save(gym);
  console.log("saved", res);

  // return new list
  const allGyms = await gymRepo.find();
  connection.close();
  return allGyms;
}

module.exports = {
  getAllGyms,
  insertGym,
};
