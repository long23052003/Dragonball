// DragonballList.tsx
import React from "react";

type Props = {
  name: string;
  image: string;
  ki: number;
  maxKi: number;
};

const DragonballList: React.FC<Props> = (props) => {
  const { name, image, ki, maxKi } = props;

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-xs mx-auto">
      <img
        src={image}
        alt={name}
        style={{ width: '280px', height: '400px' }}
        className="object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-400">Ki: {ki}</p>
      <p className="text-gray-400">Max Ki: {maxKi}</p>
    </div>
  );
};

export default DragonballList;
