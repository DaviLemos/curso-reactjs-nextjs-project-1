import P from "prop-types";
import "./styles.css";

export const TextInput = ({ actionFn, inputValue }) => {
  return (
    <input
      className="text-input"
      type="search"
      value={inputValue}
      onChange={actionFn}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  inputValue: P.string.isRequired,
  actionFn: P.func.isRequired,
};
