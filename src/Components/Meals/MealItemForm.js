import { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./mealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please enter quantity from 1 to 10 </p>}
    </form>
  );
};

export default MealItemForm;
