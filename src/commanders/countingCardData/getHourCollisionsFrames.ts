import { dateType } from "../../types";
import date from "date-and-time";

function convertDateToMinutes(date: dateType): number {
  const { year, month, day, hour, minute } = date;
  const dateObject = new Date(year, month, day, hour, minute);
  return dateObject.getTime() / (1000 * 60); // Переводим миллисекунды в минуты
}

type returnType = {
  start: {
    hour: number;
    minute: number;
  };
  end: {
    hour: number;
    minute: number;
  };
};

function calculateTimeDifferenceInMinutes(
  date1: dateType,
  date2: dateType
): number {
  const minutes1 = convertDateToMinutes(date1);
  const minutes2 = convertDateToMinutes(date2);
  return Math.round(minutes2 - minutes1);
}

type propsType = {
  trueBirthdate: dateType;
  birthdate: dateType;
};

export default function getHourCollisionsFrames({
  trueBirthdate,
  birthdate,
}: propsType): returnType {
  const hourPosition: "start" | "end" =
    trueBirthdate.hour % 2 === 0 ? "end" : "start";
  const devTimeMinutes = calculateTimeDifferenceInMinutes(
    trueBirthdate,
    birthdate
  );
  const birthdateObject = new Date(
    birthdate.year,
    birthdate.month,
    birthdate.day,
    birthdate.hour,
    birthdate.minute
  );

  const startTime =
    hourPosition === "start"
      ? date.addMinutes(birthdateObject, -trueBirthdate.minute)
      : date.addMinutes(birthdateObject, -trueBirthdate.minute - 60);
  const endTime =
    hourPosition === "start"
      ? date.addMinutes(birthdateObject, -trueBirthdate.minute + 120)
      : date.addMinutes(birthdateObject, -trueBirthdate.minute + 60);
  return {
    start: {
      hour: startTime.getHours(),
      minute: startTime.getMinutes(),
    },
    end: {
      hour: endTime.getHours(),
      minute: endTime.getMinutes(),
    },
  };
}
