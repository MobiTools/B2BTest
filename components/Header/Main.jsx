import React, { useReducer } from "react";
import PropTypes from "prop-types";
import uiState from "~/theme/config";
import Mixed from "./Mixed";

function Main(props) {
  const [state] = useReducer(null, uiState);
  const { home} = props;
  return (
    <div>
      {state.header === "mixed" && (
        <Mixed
          home={home}
        
        />
      )}
    </div>
  );
}



Main.defaultProps = {
  home: false,
};

export default Main;
