import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.css';

const Reservation = () => {
  const [reservation, setReservation] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((json) => setReservation(json.data));
  }, []);

  return (
    <div className="reservation">
      <h2>Vaše e-jízdenka</h2>
      <div className="reservation__body">
        <div className="reservation__body__headings">
          <p>Datum cesty:</p>
          <p>Z:</p>
          <p>Do:</p>
          <p>Sedadlo:</p>
        </div>
        {reservation === null ? (
          <div>Jízdenka není k dispozici</div>
        ) : (
          <div className="reservation__body__data">
            <p>
              <strong>{reservation.date}</strong>
            </p>
            <p>
              <strong>{reservation.fromCity.code}</strong>
            </p>
            <p>
              <strong>{reservation.toCity.code}</strong>
            </p>
            <p>
              <strong>{reservation.seatNumber}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
