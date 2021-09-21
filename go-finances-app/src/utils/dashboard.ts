import { ITransactionProps } from "../components/TransactionCard";
import { DataListProps } from "../pages/Dashboard";
import { month } from "./date";

type typeProp = "Income" | "Outcome";

const firstDateTransaction = (transactions: DataListProps[]) => {
  const dates = transactions
    .map((transaction: ITransactionProps) => transaction.date)
    .sort();

  const firstDate = dates[0].split("")[0] + dates[0].split("")[1];

  return `${firstDate}th`;
};

const latestDate = (transactions: DataListProps[], type: typeProp) => {
  const majorDate = transactions
    .filter((transaction: ITransactionProps) => transaction.type === type)
    .map((transaction: ITransactionProps) => transaction.date)
    .sort()
    .reverse()[0];

  return majorDate;
};

const latestDay = (date: DataListProps[], type: typeProp) => {
  const dateSplited = latestDate(date, type).split("");
  const dateTest = latestDate(date, type);

  const day = dateSplited[0] + dateSplited[1];

  return `${day}th`;
};

const lastMonthTotal = (date: DataListProps[]) => {
  const dates = date
    .map((transaction: ITransactionProps) => transaction.date)
    .sort()
    .reverse();

  const lastMonth = dates[0];

  return month(lastMonth);
};

const latestDayTotal = (date: DataListProps[]) => {
  const dates = date
    .map((transaction: ITransactionProps) => transaction.date)
    .sort()
    .reverse();

  const firstDate = dates[0].split("")[0] + dates[0].split("")[1];

  return `${firstDate}th`;
};

export {firstDateTransaction, latestDate, latestDay, lastMonthTotal, latestDayTotal}