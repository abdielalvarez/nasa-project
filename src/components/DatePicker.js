import React from "react";

const DatePicker = ({
    selectedDate,
    onChange,
    label,
    type,
    dateToLimit
}) => {

    let maxDate = new Date(2023, 10, 7).toISOString().split("T")[0];
    let minDate = "1995-06-16";
    if (type === 'end') {
        minDate = dateToLimit
    }
    if (type === 'start') {
        maxDate = dateToLimit
    }

    return (
        <div className="date-picker">
            <div>
                <p>{label}</p>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={onChange}
                    className="date-input"
                    min={minDate}
                    max={maxDate}
                />
            </div>
        </div>
    );
};

export default DatePicker;
