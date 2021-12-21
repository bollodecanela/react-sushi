import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .min(10, "Неверный номер телефона")
    .max(12, "Неверный номер телефона")
    .required("Введите номер телефона"),
  email: yup.string().email().required("Введите почту"),
  street: yup.string().required("Введите адрес"),
  building: yup.string().required("Введите адрес"),
  entrance: yup.string(),
  level: yup.string(),
  flat: yup.string(),
  comment: yup.string().max(255, "Слишком большое сообщение"),
});

export default schema;
