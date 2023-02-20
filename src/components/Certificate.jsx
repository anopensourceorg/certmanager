import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { db, certificatesRef } from '../firebase_setup';
import { doc, getDoc } from "firebase/firestore";
import {ref, getDownloadURL} from "firebase/storage";
const Certificate = () => {
    const params = useParams();
    const { id } = params;
    const [certificate, setCertificate] = useState(null);
    const [error,setError] = useState(false);
    const [certPath,setCertPath] = useState("");
    const getCertificate = async () => {
        try {
            const docRef = doc(db, "certificates", id);
            const certificateRef = await getDoc(docRef);
            const data = certificateRef.data();
            setCertificate(data);
            const certificateImageRef = ref(certificatesRef,data.filename);
            getDownloadURL(certificateImageRef).then(url => {
                setCertPath(url);
            });

        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
    useEffect(() => {
        try {
            getCertificate();
        }
        catch (error) {
            console.log(error);
            setError(true);
        }
    },[])
    return (
        <>
            {error ? <h1>Certificate Not found</h1> : <img src={certPath } alt="" style={{width:"100vw",height:"100vh",objectFit:"contain"}} />}

        </>
    )
}

export default Certificate;