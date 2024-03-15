import React from "react";
import Layout from "../components/Layout";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import DeleteBadgeModal from "../components/DeleteBadgeModal";


function BadgeDetails({badgeId, data, onCloseModal, onOpenModal, modalIsOpen, onDeleteBadge}){
    return (
        <Layout>
                <Badge name={data.name} lastname={data.lastname} title={data.job} skills={['.NET', 'sql server']} />
                <div>
                    <Link to={`/badges/${badgeId}/edit`} className="p-5">EDITAR</Link>
                    {/* <Link to="" className="text-red-600 p-5">ELIMINAR</Link> */}
                    <button onClick={onOpenModal} className="text-red-600 p-5">ELIMINAR</button>
                    <DeleteBadgeModal isOpen={modalIsOpen} onClose={onCloseModal} onDeleteBadge={onDeleteBadge}/>
                </div>
        </Layout>
    )
}

export default BadgeDetails