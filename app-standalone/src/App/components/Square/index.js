import React from "react";
import PropTypes from 'prop-types';

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
const Square = ({ isWinningPosition, onClick, value }) => (
    <button className={"square " + (isWinningPosition ? "square-winning" : "")} onClick={onClick}>
        {value}
    </button>
);

Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    /**
     *  The value to put in the square
     */
    value: PropTypes.string
};

export default Square;