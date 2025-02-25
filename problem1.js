function cashOut() {
  if (typeof money === "number" && money > 0) {
    const cashOutCharge = (money * 1.75) / 100;
    return cashOutCharge;
  } else {
    return "Invalid";
  }
}
const result = cashOut(2000);
