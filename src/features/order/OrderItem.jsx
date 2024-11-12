import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired, // Quantity should be a number
    name: PropTypes.string.isRequired, // Name should be a string
    totalPrice: PropTypes.number.isRequired, // Total price should be a number
  }).isRequired,
  isLoadingIngredients: PropTypes.bool, // Boolean for loading state
  ingredients: PropTypes.arrayOf(PropTypes.string), // Array of strings for ingredients
};

OrderItem.defaultProps = {
  isLoadingIngredients: false, // Default loading state
  ingredients: [], // Default empty array for ingredients
};

export default OrderItem;
