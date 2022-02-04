import React from "react";
import './header.css';
import stalkerLogo from './../../img/STALKER_2_Logo.png';


const Header = () => {
    return (
        <header className="header">
            {/* <img src="https://1.bp.blogspot.com/-tVZ8JbhBDCs/X4swEtHX7fI/AAAAAAAANKA/fWPiRlgSHN8DlhrWaq8oe_6t4SZxt5tSwCLcBGAsYHQ/s960/S.T.A.L.K.E.R._2_Logo.png" /> */}
            <img src={stalkerLogo} alt="" />
        </header>

    )
};

export default Header;