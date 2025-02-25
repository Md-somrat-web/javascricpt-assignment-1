function electionResult() {
  if (Array.isArray(votes) === true) {
    let banana = [];
    let mango = [];

    for (let i of votes) {
      if (i === "banana") {
        banana.push(i);
      } else if (i === "mango") {
        mango.push(i);
      }
    }

    if (banana.length > mango.length) {
      return "Banana";
    } else if (banana.length < mango.length) {
      return "Mango";
    } else if (banana.length === mango.length) {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}


