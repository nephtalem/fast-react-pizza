import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function CartItem({ item }) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired, // ID should be a number
    name: PropTypes.string.isRequired, // Name should be a string
    quantity: PropTypes.number.isRequired, // Quantity should be a number
    totalPrice: PropTypes.number.isRequired, // Total price should be a number
  }).isRequired,
};

export default CartItem;
