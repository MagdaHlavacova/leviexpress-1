import React from 'react';
import BusStop from '../BusStop';
import './style.css';

const JourneyDetail = ({ journey }) => {
  console.log(journey);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            name={stop.name}
            station={stop.station}
            time={stop.time}
            key={stop.code}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyDetail;
