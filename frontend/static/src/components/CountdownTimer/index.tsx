import {
  ColorRangeContainer,
  CountdownContainer,
  CountdownLinkContainer,
  ExpiredNoticeContainer,
  ShowCounterContainer,
} from "./style";
import { useCountdown } from "./utils";

const ExpiredNotice = () => {
  return (
    <ExpiredNoticeContainer>
      <span>Games have begun</span>
      <p>Check back tomorrow to play again!</p>
    </ExpiredNoticeContainer>
  );
};

const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value?: number;
  type?: string;
  isDanger?: boolean;
}) => {
  return (
    <CountdownContainer>
      <p>{value}</p>
      <span>{type}</span>
    </CountdownContainer>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}) => {
  return (
    <ShowCounterContainer>
      <CountdownLinkContainer>
        <DateTimeDisplay value={days} type={"Day"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </CountdownLinkContainer>
      <div>before picks close!</div>
    </ShowCounterContainer>
  );
};

const CountdownTimer = (targetDate: number) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (!seconds) {
    return <ColorRangeContainer />;
  }

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
