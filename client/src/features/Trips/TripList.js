import './Trip.css';
import TripCard from "./TripCard"


function TripList( {tripList, user} ) {

  const tripDisplay = tripList.map((trip) => {
    return <TripCard trip={trip} key={trip.id} user={user} tripList={tripList}/>
  })


  return (
    <div>
      {tripDisplay}
    </div>
  );
}

export default TripList;