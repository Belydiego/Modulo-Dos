import test from "ava";
import { Persona } from "./clases";

test("testeando el archivo clases.ts", (t) => {
  const nuevaPersona = new Persona("Diego");
  t.is(nuevaPersona.name, "Diego");
});
