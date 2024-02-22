import React, { useEffect, useState } from "react";
import "./Aquarium.css";

const Aquarium = ({ smallFishCount, bigFishCount }) => {
   const [dimensions, setDimensions] = useState({
      width: 0,
      length: 0,
      height: 0,
   });
   //  vypocet objemu v litrech
   const [volume, setVolume] = useState(0);
  //  barva tlacitka
  const [buttonColor, setButtonColor] = useState("red");
   //  tlacitko neaktivni
   const [buttonDisabled, setButtonDisabled] = useState(true);
   //  vypocet objemu
   const calculateVolume = () => {
      const { width, length, height } = dimensions;
      const calculatedVolume = (width * length * height) / 1000;
      setVolume(calculatedVolume);
      // kolik vody ryby potrebuji
      const fishNeeded = smallFishCount * 10 + bigFishCount * 20;
      // porovnani objemu jestli staci
      if (calculatedVolume >= fishNeeded) {
         setButtonColor("green");
         setButtonDisabled(false);
      } else {
         setButtonColor("red");
         setButtonDisabled(true);
      }
   };
   const handleChange = (event) => {
      const { name, value } = event.target;
      setDimensions({
         ...dimensions,
         [name]: parseFloat(value), // Převedeme na číslo
      });
   };
   //  kontrola
   useEffect(() => {
      calculateVolume();
   }, [dimensions]);

   return (
      <div className="aquarium">
         <h2>Návrh na aquarium</h2>
         <p>Počet malých ryb: {smallFishCount}</p>
         <p>Počet velkých ryb: {bigFishCount}</p>
         <p>Počet litrů v akváriu: {volume} litrů</p>
         <p>Malá ryba vyžaduje 10 litrů a velká 20 litrů v akváriu </p>
         <fieldset>
            <legend>Aquarium</legend>
            <p>
               Zadej rozměry akvária, pokud bude vyhovovat velikost vůči potřebám rybiček, tlačítko schválit rozměry bude mít zelenou barvu[v cm]
            </p>
            <label htmlFor="width">šířka</label>
            <input
               type="number"
               name="width"
               id="width"
               value={dimensions.width}
               onChange={handleChange}
            />
            <label htmlFor="lenght">délka</label>
            <input
               type="number"
               name="length"
               id="lenght"
               value={dimensions.length}
               onChange={handleChange}
            />
            <label htmlFor="height">výška</label>
            <input
               type="number"
               name="height"
               id="height"
               value={dimensions.height}
               onChange={handleChange}
            />
            <br />
            <button
               className="authorize-btn"
               style={{ backgroundColor: buttonColor }}
               disabled={buttonDisabled}
            >
               Schválit rozměry
            </button>
         </fieldset>
      </div>
   );
};

export default Aquarium;
