import PropTypes from "prop-types";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return (
    <Button 
      onClick={onClick}
      icon={<Icon />}
    />
  );
}

StarButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func
}

export { StarButton }
