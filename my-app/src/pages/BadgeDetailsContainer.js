import React, { useEffect, useState, ReactDOM } from "react";

import Layout from "../components/Layout";
import PageLoading from "../components/Loader";
import { DataService } from "../api";
import { Link, useParams} from "react-router-dom";
import Badge from "../components/Badge";
import BadgeDetails from "./BadgeDetails";

function BadgeDetailsContainer(){
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        job: ''
    });

    const { badgeId } = useParams();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        try{
            const badgeData = await DataService.getDataById(badgeId);
            setData(badgeData);
            setLoading(false);
        }catch (err){
            console.log('Error al obtener los datos:', err);
            setLoading(false);
        }
    }
    
    if (loading) {
        return <PageLoading />;
    }

    const handleOpenModal = (e)=>{
        setModalIsOpen(true)
    }

    const handleCloseModal = (e)=>{
        setModalIsOpen(false)
    }

    const handleDeleteBadge = async (e)=>{
        setLoading(true)
        try{
            await DataService.deleteDataById(badgeId)
            setLoading(false)

        }catch{
            setLoading(false)
        }
    }
    
    return (
        <>
            <BadgeDetails badgeId={badgeId} data={data} onCloseModal={handleCloseModal} onOpenModal={handleOpenModal} modalIsOpen={modalIsOpen} onDeleteBadge={handleDeleteBadge}/>
        </>
      );
}

export default BadgeDetailsContainer;
