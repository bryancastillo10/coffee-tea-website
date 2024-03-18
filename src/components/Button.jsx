import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div className="flex flex-col items-start ml-[-6] pl-4 py-2">
      <button className="bg-tertiary text-white px-5 py-3 rounded-full hover:scale-105 hover:bg-primary/90 duration-500 flex items-center gap-3 ">
        {props.children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
