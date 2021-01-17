import Faker from "./Faker";
import { fieldDescription, VTableProps } from "./types";

const fields: Array<fieldDescription> = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "pet",
    type: "select",
    values: [
      "cat",
      "dog",
      "rat",
      "turtle",
      "parrot",
    ]
  },
  {
    name: "position",
    type: "select",
    values: [
      "president",
      "director",
      "manager",
      "office clerk",
      "assistant",
    ]
  },
  {
    name: "sex",
    type: "bool",
    values: ["m", "f"]
  },
  {
    name: "age",
    type: "number",
    values: [18, 50]
  }
]

const fakeRequest = (): Promise<string> => {
  return new Promise((res) => {
    const rows = 1000, columns = 5;
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
    const resultObj: VTableProps = {
      columns: columns,
      rows: rows,
      fields: fields,
      data: items
    };
    setTimeout(() => {
      //By doing this i faking a response from the server
      res(JSON.stringify(resultObj));
    }, 100);
  })
}

export default fakeRequest;
