import './Trip.css';
import TripCard from "./TripCard"


function TripList( {tripList} ) {

  const tripDisplay = tripList.map((trip) => {
    return <TripCard trip={trip} key={trip.id}/>
  })


  return (
    <div>
      {tripDisplay}
    </div>
  );
}

export default TripList;