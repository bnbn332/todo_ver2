// 날짜를 표기할 컴포넌트
import Year from "react-live-clock";
import Month from "react-live-clock";
import Date from "react-live-clock";

const Calendar = () => {
  return (
    <div className="Year-Month-Day">
      <p>
        <span className="Year">
          <Year
            id="Year"
            format={"YYYY"}
            ticking={false}
            timezone={"KR/Pacific"}
          />
        </span>
        년 &nbsp;&nbsp;
        <span className="Month">
          <Month format={"MM"} ticking={false} timezone={"KR/Pacific"} />
        </span>
        월 &nbsp;&nbsp;
        <span className="Day">
          <Date format={"DD"} ticking={false} timezone={"KR/Pacific"} />
        </span>
        일
      </p>
    </div>
  );
};

export default Calendar;
