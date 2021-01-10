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

export default class Faker {
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
