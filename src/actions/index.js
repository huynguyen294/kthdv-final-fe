export const FORMAT_MONEY = (string) =>
  string.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
