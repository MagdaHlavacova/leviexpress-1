import React, { useState } from 'react';
import './style.css';
import Seat from '../Seat';
import { useHistory } from 'react-router';

const SeatPicker = ({ seats, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  let history = useHistory();

  const handleBuy = (seat, journeyId) => {
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/reserve?seat=${seat}&journeyId=${journeyId}`,
      { method: 'post' },
    )
      .then((resp) => resp.json())
      .then((json) => history.push(`/reservation/${json.data.reservationId}`));
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <div key={index} className="seat-row">
            {row.map((seat) => (
              <Seat
                key={seat.number}
                number={seat.number}
                isOccupied={seat.isOccupied}
                isSelected={seat.number === selectedSeatNumber ? true : false}
                onSelect={handleSeatSelect}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="btn"
        type="button"
        onClick={() => handleBuy(selectedSeatNumber, journeyId)}
        disabled={selectedSeatNumber === null ? true : false}
      >
        Rezervovat
      </button>
    </div>
  );
};

export default SeatPicker;
