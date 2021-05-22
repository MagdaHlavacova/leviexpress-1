import React, { useState } from 'react';
import JourneyPicker from '../JourneyPicker/index';

const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (data) => {
    setJourney(data);
  };

  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? undefined : (
        <div>Nalezeno spojení s id {journey.journeyId}</div>
      )}
    </>
  );
};

export default Home;
