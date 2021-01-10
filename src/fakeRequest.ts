import Faker from "./Faker";

const fakeRequest = (): Promise<string> => {
  return new Promise((res) => {
    const rows = 100, columns = 5;
    const total = rows * columns;
    const items = new Array(total);
    for (let i = 0; i < total; i += columns) {
      const s = Faker.randomSex();
      items[i] = s === "m" ? Faker.randomMaleName() : Faker.randomFemaleName();
      items[i + 1] = Faker.randomPet();
      items[i + 2] = Faker.randomPosition();
      items[i + 3] = s;
      items[i + 4] = Faker.randomNumber(18, 50);
    }
    setTimeout(() => {
      res(`{
        "columns": ${columns},
        "rows": ${rows},
        "fields": [
          "name",
          "pet",
          "position",
          "sex",
          "age"
        ],
        "data": ${JSON.stringify(items)}
      }
      `);
    }, 100);
  })
}

export default fakeRequest;
