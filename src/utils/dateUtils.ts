// 날짜에 따라 Today or YYYY.MM.DD 값 리턴하는 함수
export const formatToTodayOrDate = (date: number): string => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const today = parseInt(
    `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`
  );

  if (today === date) {
    return 'Today';
  } else {
    return date.toString().replace(/^(\d{4})(\d{2})(\d{2})$/, '$1.$2.$3');
  }
};
