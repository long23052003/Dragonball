import { useState, useEffect } from "react";
import axios from "axios";
import { DragonballData } from "./type";
import DragonballCollection from "./Components/DragonballCollection";

type Dragonball = {
  id: number;
  name: string;
  url: string;
};

function App() {
  const [dbs, setDBs] = useState<DragonballData[]>([]);

  useEffect(() => {
    const getDbs = async () => {
      const res = await axios.get(
        "https://dragonball-api.com/api/characters?limit=20&offset=20"
      );
      console.log(res.data);
      const dbPromises = res.data.items.map((db: Dragonball) =>
        axios.get(`https://dragonball-api.com/api/characters/${db.id}`)
      );
      const dbResponses = await Promise.all(dbPromises);
      const dbData = dbResponses.map((response) => response.data);
      setDBs(dbData);
    };
    getDbs();
  }, []);

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto p-6">
          <header className="text-4xl font-bold text-center text-white mb-6">
            DragonBall Characters
          </header>
          <DragonballCollection dbs={dbs} />
        </div>
      </div>
    </>
  );
}

export default App;
