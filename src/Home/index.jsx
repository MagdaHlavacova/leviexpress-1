import React, { useState } from 'react';
import JourneyDetail from '../JourneyDetail';
import JourneyPicker from '../JourneyPicker/index';

const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (data) => {
    setJourney(data);
  };

  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? undefined : <JourneyDetail journey={journey} />}
    </>
  );
};

export default Home;
