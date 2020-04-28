import React from "react";
import { Button } from "./components/Button";

var total = 0;

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: total, text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    this.setState({ value: event.target.value });
    total = Number(total) + Number(this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>${total}</h2>
        <form>
          <label>
            <input
              type="text"
              //value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <br />
        <Button
          onClick={this.handleClick}
          type="button"
          buttonStyle="btn--primary--outline"
          buttonSize="btn--large"
        >
          Record Purchase
        </Button>
        <br />
        <br />
        Expense Comments:
        <br />
        <textarea type="text" value={this.text} />
        <br />
        <br />
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>beatdapp Expense Tracker</h1>
      <span> </span>
      <br />
      Amount:
      <ExpenseForm>
        <label>
          <input type="text" name="amount" />
        </label>
      </ExpenseForm>
    </div>
  );
}
