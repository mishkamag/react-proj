import "./ExpenseItem.css";

export function ExpenseItem() {
  const expenseDate = new Date(2022, 5, 27);
  const expenseeTitle = "Car Insurance";
  const expenseAmount = 278.24;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseeTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
