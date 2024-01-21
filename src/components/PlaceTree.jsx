/* eslint-disable react/prop-types */
const PlaceTree = ({ id, placesById, handleComplete, parentId, handleAdd }) => {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => handleComplete(parentId, place.id)}>Delete</button>
      <button onClick={() => handleAdd(parentId)}>Add</button>
      {childIds?.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree
              key={id}
              id={id}
              placesById={placesById}
              handleComplete={handleComplete}
              handleAdd={handleAdd}
              parentId={place.id}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
