import React from "react";

export default function PizzaForm(props) {
  const { values, submit, change, errors, disabled } = props;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <label className="formChild">
        Name:{" "}
        <input
          className="textField"
          id="outlined-basic"
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          maxLength="100"
          variant="outlined"
          size="small"
        />
      </label>
      <div className="formChild">
        Size:{" "}
        <select
          id="size"
          value={values.size}
          onChange={handleChange}
          name="size"
        >
          <option value="none"></option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="big">big</option>
          <option value="way too big">way too big</option>
        </select>
      </div>

      <label className="formChild">
        <input
          checked={values.mushrooms}
          onChange={handleChange}
          type="checkbox"
          name="mushrooms"
          color="primary"
        />{" "}
        Mushrooms
      </label>
      <label className="formChild">
        <input
          checked={values.cheese}
          onChange={handleChange}
          type="checkbox"
          name="cheese"
          color="primary"
        />{" "}
        Cheese
      </label>
      <label className="formChild">
        <input
          checked={values.peperoni}
          onChange={handleChange}
          type="checkbox"
          name="peperoni"
          color="primary"
        />{" "}
        Peperoni
      </label>
      <label className="formChild">
        <input
          checked={values.beans}
          onChange={handleChange}
          type="checkbox"
          name="beans"
          color="primary"
        />{" "}
        Beans
      </label>
      <label className="formChild">
        Any special Instructions?
        <br />
        <textarea
          id="outlined-basic"
          name="special"
          className="textField"
          type="textarea"
          value={values.special}
          onChange={handleChange}
          maxLength="500"
          label="Special Instructions"
        />
      </label>
      <div className="container">
        <button
          type="submit"
          className="submit"
          value="submit"
          disabled={disabled}
          variant="contained"
          color="primary"
          size="small"
        >
          Add order!
        </button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>
    </form>
  );
}
