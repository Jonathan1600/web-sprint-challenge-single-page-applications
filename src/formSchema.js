import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be 2 characters long")
    .required("Name is required, please fill out."),
  size: yup
    .string()
    .oneOf(
      ["small", "medium", "big", "way too big"],
      "Please select a valid size"
    ),
  peperoni: yup.boolean(),
  beans: yup.boolean(),
  mushrooms: yup.boolean(),
  cheese: yup.boolean(),
  special: yup.string(),
});

export default formSchema;
