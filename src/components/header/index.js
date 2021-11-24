import React from "react";
import Logo from '../../images/logo_3.png';
import ProgressBar from "../ProgressBar";
import { connect } from 'react-redux';

function Header() {
    
    return(<>
    <header>
        <img id='logo' src={Logo} alt='Logo do Bjjstars Awards' title='Logo do Bjj stars Awards' with='300px' height='300px' />
        <h1>SEJA BEM VINDO AO BJJSTARS AWARDS</h1>
        <ProgressBar />
    </header>
   </>);
}

export default connect(state =>({}))(Header);