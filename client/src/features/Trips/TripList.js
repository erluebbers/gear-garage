import './Trip.css';
import TripCard from "./TripCard"


function TripList( {tripList, handleDeleteTrip} ) {

  const tripDisplay = tripList.map((trip) => {
    return <TripCard trip={trip} key={trip.id} handleDeleteTrip={handleDeleteTrip}/>
  })


  return (
    <div>
      {tripDisplay}
    </div>
  );
}

export default TripList;