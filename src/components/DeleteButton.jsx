import React from "react";
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

function DeleteButton({ index, id, onDelete }) {
    return (
        <Button variant="danger" onClick={() => onDelete(index)}>
            Delete
        </Button>
    );
}

DeleteButton.PropTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export {DeleteButton};