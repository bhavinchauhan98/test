import React from "react";

function ShowTime({ showTimeData }) {
  return (
    <div className="container mt-5 card">
      <div className="card-body">
        {showTimeData &&
          showTimeData.map((show) => (
            <div key={show.id} className="row">
              <div className="col-3">
                <p>
                  <h6>{show.theatreName}</h6>
                  {show.address.line2}
                  {show.address.subRegion}
                </p>
              </div>
              <div className="col-9">
                {show.timeSlots.map((slot) => (
                  <button
                    key={slot.time + slot.rate}
                    className="btn btn-secondary m-2"
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowTime;
