import React from "react";

function ShowTime({ showTimeData }) {
  return (
    <table className="show_time_list">
      <tbody>
        {showTimeData &&
          showTimeData.map((show) => (
            <tr key={show.id} className="show_time_list_row">
              <td>
                <p>
                  {show.theatreName}: {show.address.line2}
                </p>
                <p>{show.address.subRegion}</p>
              </td>
              <td>
                {show.timeSlots.map((slot) => (
                  <button key={slot.time + slot.rate} className="time_button">
                    {slot.time}
                  </button>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ShowTime;
