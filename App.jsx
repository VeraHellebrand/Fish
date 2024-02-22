import { useEffect, useState } from "react";
import "./App.css";
import Toggler from "./Components/Toggler/Toggler";
import Data from "./Data.json";
import FishList from "./Components/FishList/FishList";
import Aquarium from "./Components/Aquarium/Aquarium";
import FishForm from "./Components/FishForm/FishForm";

function App() {
   // stranky
   const [activeTab, setActiveTab] = useState(1);
   //  data json
   const [fish, setFish] = useState(Data.fish);

   //  pridani rybicky
   const [newFish, setNewFish] = useState({
      id: fish.length > 0 ? Math.max(...fish.map((item) => item.id)) + 1 : 1,
      name: "",
      type: "malá",
   });


   //  pocet malych ryb
   const [smallFishCount, setSmallFishCount] = useState(0);
   //  pocet velkych ryb
   const [bigFishCount, setBigFishCount] = useState(0);
   
   //  zazanamenavani zmen
   const handleChange = (event) => {
     const { name, value } = event.target;
     setNewFish({
       ...newFish,
         [name]: value,
        });
   };
   //  pridani nove rybky
   const handleAdd = () => {
     setFish((fish) => {
       return [...fish, newFish];
      });
      
      const updatedFish = {
        id: newFish.id + 1,
         name: "",
         type: "malá",
      };
      setNewFish(updatedFish);
   };
   //  kontrola
   useEffect(() => {
     console.log(newFish);
    }, [newFish]);
    
    useEffect(() => {
      // Výpočet počtu malých a velkých ryb při načtení stránky
      const initialSmallFishCount = fish.filter((item) => item.type === "malá").length;
      const initialBigFishCount = fish.filter((item) => item.type === "velká").length;
      setSmallFishCount(initialSmallFishCount);
      setBigFishCount(initialBigFishCount);
    },[fish]);
    
    
    //  stranky
    const handleChoose = (source) => {
      switch (source) {
        case "list-of-fish": {
            setActiveTab(1);
            break;
         }
         case "aquarium-form": {
            setActiveTab(2);
            break;
         }

         default:
            break;
      }
   };
   //  mazani
   const handleDelete = (idecko) => {
      setFish(fish.filter((item) => item.id !== idecko));
   };

   return (
      <div className="app">
         <h1>Aplikace rybičky - React</h1>
         <Toggler active={activeTab} onChoose={handleChoose} />
         {activeTab === 1 && (
            <div>
                 <div>
            <p>Počet malých ryb: {smallFishCount}</p>
            <p>Počet velkých ryb: {bigFishCount}</p>
          </div>
               <FishList data={fish} handleDelete={handleDelete} />
               <FishForm
                  data={newFish}
                  handleChange={handleChange}
                  handleAdd={handleAdd}
               />
            </div>
         )}
         {activeTab === 2 && (
            <div>
               <Aquarium
                  smallFishCount={smallFishCount}
                  bigFishCount={bigFishCount}
               />
            </div>
         )}
      </div>
   );
}

export default App;
