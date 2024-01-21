import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  const handleAdd = (parentId) => {
    const parent = plan[parentId];
    const newId = Object.keys(plan).length;

    const newObj = {
      id: newId,
      title: "New country",
      childIds: [],
    };

    const nextParent = {
      ...parent,
      childIds: [...parent.childIds, newObj.id],
    };

    // console.log(parent, newObj, nextParent);
    // console.log(nextParent);
    setPlan({
      ...plan,
      [newId]: newObj,
      [parentId]: nextParent,
    });
  };

  //   console.log(plan);

  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        <li>{root.title}</li>
        {planetIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            handleComplete={handleComplete}
            parentId={root.id}
            handleAdd={handleAdd}
          />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;
