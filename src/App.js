import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import "./App.css";
import PizzaForm from "./Pizza";
import * as yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

const initValues = {
  name: "",
  size: "",
  mushrooms: false,
  cheese: false,
  peperoni: false,
  beans: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = true;

const App = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const updateForm = (inputName, inputValue) => {
    yup
      .reach(formSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({ ...formErrors, [inputName]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [inputName]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      mushrooms: formValues.mushrooms,
      beans: formValues.beans,
      peperoni: formValues.peperoni,
      cheese: formValues.cheese,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormValues(initValues);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="main">
      <nav>
        <ul className="menu">
          <li className="logo">
            <p className="a">Lambda Eats</p>
          </li>
          <li className="item">
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="a" to="/pizza">
              Pizza
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/pizza">
          <PizzaForm
            submit={submitForm}
            change={updateForm}
            values={formValues}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
