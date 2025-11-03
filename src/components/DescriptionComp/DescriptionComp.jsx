
import PropTypes from "prop-types";

const DescriptionComp = ({ value }) => {
  return (
    <div className="border p-3 shadow-sm rounded text-center">
      {value}
    </div>
  );
};

// ✅ Add PropTypes validation (JS version)
DescriptionComp.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DescriptionComp;
