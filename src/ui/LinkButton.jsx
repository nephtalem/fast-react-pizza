import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a renderable node (e.g., string, element, etc.)
  to: PropTypes.string.isRequired, // Ensures 'to' is a string (usually a path or URL)
};

export default LinkButton;
