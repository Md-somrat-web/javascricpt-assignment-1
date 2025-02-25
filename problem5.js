function calculateWatchTime() {
  let total = 0;
  for (let i of times) {
    if (typeof i !== "number") {
      return "Invalid";
    }
    total = total + i;
  }
  const hour = Math.floor(total / 3600);
  const minute = Math.floor((total - hour * 3600) / 60);
  const second = total - hour * 3600 - minute * 60;

  const time = {
    hours: hour,
    minutes: minute,
    seconds: second,
  };
  return time;
}
const result = calculateWatchTime([100, 99, 119, 300]);
