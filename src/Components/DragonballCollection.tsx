import React from "react";
import { DragonballData } from "../type";
import DragonballList from "./DragonballList";

type Props = {
  dbs: DragonballData[];
};
const DragonballCollection: React.FC<Props> = (props) => {
  const { dbs } = props;
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <section className=""></section>
      <div className="flex flex-wrap justify-center gap-4">
        {dbs.map((db) => {
          return (
            <div className="p-2 border-gray-200">
              <DragonballList
                key={db.id}
                name={db.name}
                image={db.image}
                ki={db.ki}
                maxKi={db.maxKi}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragonballCollection;
