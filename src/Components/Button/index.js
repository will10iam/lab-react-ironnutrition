import React from "react";

export function Button(props) {

    function handleModal() {
        props.setShowModal(!props.showModal);   
    }

    return ( 
        <button onClick={handleModal}>
            Adicionar um alimento
        </button>
        
       
        
    )
}

export default Button;