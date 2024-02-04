type inputDateType = {
  day: number;
  month: number;
};

export default function daysBetweenDates(
  date1: inputDateType,
  date2: inputDateType,
  year: number
): number {
  const { day: day1, month: month1 } = date1;
  const { day: day2, month: month2 } = date2;

  // Сначала определим количество дней в каждом месяце
  const daysInMonth = [
    31,
    28 + (isLeapYear(year) ? 1 : 0),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // Функция для определения високосного года
  function isLeapYear(year: number): boolean {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  // Теперь мы можем расчитать разницу в днях между двумя датами
  let totalDays = 0;
  if (month2 < month1 || (month1 === month2 && day2 <= day1)) {
    for (let i = month1 + 1; i < month2; i++) {
      totalDays += daysInMonth[i];
    }
    if (month1 == month2) {
      totalDays += day2 - day1;
    } else {
      totalDays += daysInMonth[month1] - day1;
      totalDays += day2;
    }
    return totalDays;
  } else {
    for (let i = month2 + 1; i < month1; i++) {
      totalDays += daysInMonth[i];
    }
    if (month2 == month1) {
      totalDays += day1 - day2;
    } else {
      totalDays += daysInMonth[month2] - day2;
      totalDays += day1;
    }
    return totalDays;
  }
}
