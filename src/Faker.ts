const M_NAMES: Array<string> = [
  "joe",
  "fred",
  "piter",
  "max",
  "sam",
  "victor",
];

const F_NAMES: Array<string> = [
  "katherine",
  "olivia",
  "emma",
  "ava",
  "sophia",
  "isabella",
];

const POSITIONS: Array<string> = [
  "president",
  "director",
  "manager",
  "office clerk",
  "assistant",
];

const S: Array<string> = [
  "m",
  "f"
];

const PETS: Array<string> = [
  "cat",
  "dog",
  "rat",
  "turtle",
  "parrot",
];

type fields = "male name" | "female name" | "pet" | "position" | "sex" | "number";

export interface condition {
  field: fields;
  for: fields;
  possibleValues?: Array<string>;
  impossibleValues?: Array<string>;
}

export interface randomArrProperties {
  rows: number;
  fields: Array<fields>;
  conditions?: Array<condition>;
}

export default class Faker {
  private min: number = 0;
  private max: number = 1;
  private properties: randomArrProperties;
  constructor(properties) {
    this.properties = properties;
  }

  public getItem(fieldName: string): string {
    switch(fieldName) {
      case "male name":
        return Faker.randomMaleName();
      case "female name":
        return Faker.randomFemaleName();
      case "pet":
        return Faker.randomPet();
      case "position":
        return Faker.randomPosition();
      case "sex":
        return Faker.randomSex();
      case "number":
        return Faker.randomNumber(this.min, this.max);
      default:
        throw `Field ${fieldName} is unsapported!`;
    }
  }

  public randomArr(): Array<string> {
    const columns = this.properties.fields.length;
    const total: number = this.properties.rows * columns;
    const items = new Array(total);
    for (let i = 0; i < total; i += columns) {
      for (let j = 0; j < columns; j += 1) {
        const field = this.properties.fields[j];
        //console.log("f", field);
        items[i + j] = this.getItem(field);
      }
    }
    return items;
  }

  private static randomInRange(lower: number, upper: number): number {
    const rnd = lower - 0.5 + Math.random() * (upper - lower + 1);
    return Math.round(rnd);
  }

  private static randomItem<T>(arr: Array<T>): T {
    const ind = Faker.randomInRange(0, arr.length - 1);
    return arr[ind];
  }

  public static randomNumber(lower: number, upper: number): string {
    return Faker.randomInRange(lower, upper).toString();
  }

  public static randomFemaleName(): string {
    return Faker.randomItem<string>(F_NAMES);
  }

  public static randomMaleName(): string {
    return Faker.randomItem<string>(M_NAMES);
  }

  public static randomPosition(): string {
    return Faker.randomItem<string>(POSITIONS);
  }

  public static randomSex(): string {
    return Faker.randomItem<string>(S);
  }

  public static randomPet(): string {
    return Faker.randomItem<string>(PETS);
  }
}
