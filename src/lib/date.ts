export function getNDayBefore(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const diffDay = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / (24 * 60 * 60 * 1000)
  );
  const diffMonth = currentDate.getMonth() - targetDate.getMonth();

  if (diffDay < 1) {
    return "今日";
  } else if (diffDay < 30) {
    return `${diffDay} 日前`;
  } else if (diffDay < 365) {
    return `${diffMonth} ヶ月前`;
  } else {
    return date;
  }
}
