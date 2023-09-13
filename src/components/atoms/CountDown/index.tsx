import React, { useContext, useEffect, useState } from "react";
import { keysTheme } from "data/dataMx";
import { Container, TimeSpan } from "./styles";
import { IFontWeight } from "interfaces";
import { ThemeContext } from "context/context";
import moment from "moment";

export interface IContDownProps {
  /** Size of the container */
  size: number;
  /** Data time to start countdown */
  dataStart: string;
  /** Data time to finish countdown */
  dataFinish: string;
  /** Stroke color of the container */
  strokeColor: keysTheme;
  /** Stroke width of the container */
  strokeWidth: number;
  /** Stroke color of the container */
  strokeBgColor: keysTheme;
  /** Callback to be called when finish countdown */
  onFinish: () => void;
}

const styles = {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  } as React.CSSProperties,
};

export const AtomCountDown = ({
  size,
  dataStart,
  dataFinish,
  onFinish,
  strokeColor,
  strokeBgColor,
  strokeWidth = 4,
}: IContDownProps): JSX.Element => {
  const { palette } = useContext(ThemeContext);
  const [timeStampStart] = useState<number>(new Date(dataStart).getTime());
  const [timeStampFinish] = useState<number>(new Date(dataFinish).getTime());

  const [circumference] = useState(size * Math.PI);
  const [radius] = useState(size / 2);
  const [formatTimer, setFormatTimer] = useState<any>("00:00");
  const [millisecondsLoader] = useState<any>(timeStampFinish - timeStampStart);
  const [timeDuration, setTimeDuration] = useState<any>(
    timeStampFinish - timeStampStart
  );
  const [timeDurationCopy, setTimeDurationCopy] = useState<any>(
    timeStampFinish - timeStampStart
  );
  const [startCount, setStartCount] = useState<boolean>(false);

  const { fontFamily } = useContext(ThemeContext);
  const font: string = fontFamily.main["regular" as keyof IFontWeight];

  let duration = moment.duration(timeDuration, "milliseconds");
  const interval = 1000;
  const intervalLoader = 116.6 * ((timeStampFinish - timeStampStart) / 10000);

  const strokeDashoffset = (): string | number | undefined => {
    const offset =
      circumference - (timeDurationCopy / millisecondsLoader) * circumference;

    return offset >= circumference ? circumference : offset;
  };

  useEffect(() => {
    let timerLoader: NodeJS.Timeout;

    if (timeDurationCopy >= 0) {
      if (startCount) {
        timerLoader = setTimeout(() => {
          setTimeDurationCopy(timeDurationCopy - intervalLoader);
        }, 10);
      }

      return () => {
        clearTimeout(timerLoader);
      };
    } else {
      timeDuration >= 0 &&
        setTimeDurationCopy(timeStampFinish - timeStampStart);
    }
  }, [timeDurationCopy, startCount]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!Number.isNaN(timeStampFinish)) {
      if (timeDuration >= 0) {
        timer = setTimeout(() => {
          duration = moment.duration(timeDuration, "milliseconds");
          setTimeDuration(timeDuration - interval);
          setFormatTimer(moment(duration.asMilliseconds()).format("mm:ss"));
          setStartCount(true);
        }, 1000);
      } else {
        onFinish();
        setStartCount(false);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeDuration]);

  return (
    <>
      <Container size={`${size}px`}>
        <TimeSpan fontSize={`${size * 0.3}px`} font={font} colors={palette}>
          {formatTimer}
        </TimeSpan>

        <svg style={styles.svg}>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={palette[strokeBgColor]}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg style={styles.svg}>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset()}
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={palette[strokeColor]}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </Container>
    </>
  );
};
