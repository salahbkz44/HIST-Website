const Calendar = ({ className = "" }) => {
  // Add className prop with default empty string
  const month = "َAvril 2025";
  const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
  const dates = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null],
  ];

  return (
    <div
      className={`max-w-64 md:!p-4 !p-2 font-rubik bg-white rounded-lg shadow-xl overflow-hidden ${className}`}
    >
      {/* Rest of your calendar code remains exactly the same */}
      {/* Month Header */}
      <div className="md:!py-2 !py-0.5 !px-2 md:!px-4">
        <h2 className="md:text-sm text-[10px] font-semibold text-[#4A5660] text-center">
          {month}
        </h2>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 !py-1 !px-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center md:text-[10px] text-[8px] font-regular text-[#B5BEC6]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 gap-1 !p-2">
        {dates.flatMap((week, weekIndex) =>
          week.map((date, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`md:w-6 w-4 hover:cursor-default md:h-6 h-4 flex items-center justify-center rounded-full mx-auto text-[10px] md:text-sm
                ${
                  date
                    ? "hover:bg-[#02382b5a] cursor-pointer transition-colors"
                    : "opacity-0"
                }
                ${date === 30 ? "bg-hist-green text-white" : ""}`}
            >
              {date}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
