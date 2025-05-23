import React from "react";
import "../../styles/GridRopa.css";

import casualImage from '../../images/Grid/sabiCasual.png'; // Corrige la ruta de sabiCasual.png
import formalImage from '../../images/Grid/sabiTraje.png'; // Corrige la ruta de sabiTraje.png
import partyImage from '../../images/Grid/sabiFiesta.png'; // Corrige la ruta de sabiFiesta.png
import gymImage from '../../images/Grid/sabiFuerte.png'; // Corrige la ruta de sabiFuerte.png

function GridRopa() {
    return (
        <div className="mt-8 items-center flex justify-center flex-col mx-16" id="grid-ropa">
            <h1 className="text-4xl">Browse by Dress Styles</h1>
            
            <div className="grid grid-cols-3 grid-rows-2 gap-8  " id="grid-grid-ropa">
                <div id="Casual">
                    <p>Casual</p>
                    <img src={casualImage} alt="Casual" />
                </div>
                <div className="" id="Formal">
                    <p>Formal</p>
                    <img src={formalImage} alt="Formal" />
                </div>
                <div className="" id="Party">
                    <p>Party</p>
                    <img src={partyImage} alt="Party" />
                </div>
                <div className="c" id="Gym">
                    <p>Gym</p>
                    <img src={gymImage} alt="Gym" />
                </div>
            </div>
            
        </div>
    );
}

export default GridRopa;