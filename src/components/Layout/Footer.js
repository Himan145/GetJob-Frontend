import React, { useContext } from 'react';
import { Context } from '../../index';
import {FaFacebook,FaYoutube,FaLinkedin} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Footer=()=>{
    const {isAuthorized}=useContext(Context);
    return(
        <footer className={isAuthorized?"footerShow":"footerHide"}>
            <div>&copy;All Rights Reserved By Himan Biswas.</div>
            <div>
                <Link to={'/'} target="_blank"><FaFacebook/></Link>
                <Link to={'/'} target="_blank"><FaYoutube/></Link>
                <Link to={'/'} target="_blank"><FaLinkedin/></Link>
                <Link to={'/'} target="_blank"><RiInstagramFill/></Link>
            </div>
        </footer>
    )
}