import { getAll, getById } from "./cosas";

function main() {
  console.log(getAll());
  console.log(getById(2));
}
main();
