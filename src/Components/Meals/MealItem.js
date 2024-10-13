import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const formattedPrice = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.name}>{props.meal.name}</h3>
        <p className={styles.description}>{props.meal.description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm id={props.meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
