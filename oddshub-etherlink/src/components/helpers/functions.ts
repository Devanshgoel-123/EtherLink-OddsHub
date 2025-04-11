import { enqueueSnackbar } from "notistack";
export const getTimeBetween = (dateFuture: number, dateNow: number) => {
  var seconds = Math.floor((dateFuture - dateNow) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  return [days, hours, minutes];
};


export const getTimeForDisplay=(timestamp:number):string=>{
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const handleToast = (
  heading: string,
  subHeading: string,
  type: string
) => {
  enqueueSnackbar(heading, {
    //@ts-ignore
    variant: "custom",
    subHeading: subHeading,
    type: type,
    persist: true,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

export const calcPrice = (poolBalances: any[]): number[] => {
  const hasZeroBalances = poolBalances.every((h) => h.toString() === "0");
  if (hasZeroBalances) {
    return poolBalances.map(() => 0);
  }

  const product = poolBalances.reduce((a, b) => a * b);
  const denominator = poolBalances
    .map((h) => product / h)
    .reduce((a, b) => a + b);

  const prices = poolBalances.map((holding) => product / holding / denominator);
  return prices.map((price) => +price.valueOf());
};


export const getProbabilites = (shares1: any, shares2: any) => {
  if (shares1 == "0" && shares2 == "0") {
    return [50, 50];
  } else if (shares2 == "0") {
    return [100, 0];
  } else if (shares1 == "0") {
    return [0, 100];
  }
  const percent1 =
    (parseFloat(shares1) /
      1e6 /
      (parseFloat(shares1) / 1e6 + parseFloat(shares2) / 1e6)) *
    100;
  const percent2 =
    (parseFloat(shares2) /
      1e6 /
      (parseFloat(shares1) / 1e6 + parseFloat(shares2) / 1e6)) *
    100;

  return [percent1, percent2];
};

export const getNumber = (num: any, decimals: number = 6) => {
  return (parseFloat(BigInt(num).toString()) / 10 ** decimals).toString();
};