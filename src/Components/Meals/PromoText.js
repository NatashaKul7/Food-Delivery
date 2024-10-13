import styles from "./promoText.module.css"

const PromoText = () => {
  return (
    <section className={styles['promo-text']}>
      <h2>Online Sushi Restaurant Japan Cuisine</h2>
      <p>
        Japan Kitchen is an online sushi restaurant where your favorite sushi
        and sashimi, rolls and other dishes of national Japanese cuisine are
        made by a team of professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most genuine ingredients,
        give good taste to dishes, give pleasure from the meal.
      </p>
    </section>
  );
};

export default PromoText;
