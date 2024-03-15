import React from "react";
import Modal from "./modal";

function DeleteBadgeModal(props){
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div>
                <h1>Esta seguro?</h1>
                <div>
                    <button onClick={props.onDeleteBadge} className="p-5">eliminar</button>
                    <button onClick={props.onClose} className="p-5">cancel</button>
                </div>
            </div>

        </Modal>
    )
}


export default DeleteBadgeModal