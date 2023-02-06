export const timestampToDate = (timestamp) => {
  // initialize new Date object
  const date_object = new Date(timestamp);

  // year as 4 digits (YYYY)
  const year = date_object.getFullYear();

  // month as 2 digits (MM)
  const month = ("0" + (date_object.getMonth() + 1)).slice(-2);

  // date as 2 digits (DD)
  const date = ("0" + date_object.getDate()).slice(-2);

  // hours as 2 digits (hh)
  const hours = ("0" + date_object.getHours()).slice(-2);

  // minutes as 2 digits (mm)
  const minutes = ("0" + date_object.getMinutes()).slice(-2);

  // seconds as 2 digits (ss)
  const seconds = ("0" + date_object.getSeconds()).slice(-2);

  // date as YYYY-MM-DD format
  console.log("Date as YYYY-MM-DD Format: " + year + "-" + month + "-" + date);

  console.log("\r\n");

  // date & time as YYYY-MM-DD hh:mm:ss format:
  console.log(
    "Date as YYYY-MM-DD hh:mm:ss Format: " +
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
  );

  console.log("\r\n");

  // time as hh:mm format:
  console.log("Time as hh:mm Format: " + hours + ":" + minutes);

  return {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    date_object,
  };
};
