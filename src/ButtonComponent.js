import React from 'react'


const styles = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const ButtonComponent = ({ value, onClick }) => {
    return (
        <button style={styles} onClick={onClick}>
            {value}
        </button>
    )
}

export default ButtonComponent
