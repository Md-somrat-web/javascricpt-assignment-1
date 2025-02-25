function isBestFriend() {
  if (
    typeof f1 === "object" &&
    typeof f2 === "object" &&
    Array.isArray(f1) === false &&
    Array.isArray(f2) === false
  ) {
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
