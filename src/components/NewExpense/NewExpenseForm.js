import { useState } from "react";
import "./NewExpenseForm.css";
function NewExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const ChangeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type={"text"}
            onChange={ChangeTitleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type={"number"}
            min="0.01"
            step={"0.01"}
            onChange={changeAmountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type={"date"}
            min="2019-01-01"
            max={"2022-12-31"}
            onChange={changeDateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpenseForm;
