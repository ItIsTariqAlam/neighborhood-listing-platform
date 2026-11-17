import fs from "fs";
import Ajv2020 from "ajv/dist/2020.js";

const ajv = new Ajv2020({
  allErrors: true,
});

const schema = JSON.parse(
  fs.readFileSync("schemas/property.schema.json", "utf8")
);

const data = JSON.parse(
  fs.readFileSync("data/generated/properties.json", "utf8")
);

const validate = ajv.compile(schema);

const valid = validate(data);

if (valid) {
  console.log("VALIDATION PASSED");
} else {
  console.log("VALIDATION FAILED");
  console.log(validate.errors);
}