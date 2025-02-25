function validEmail() {
  const chars = ".-_+@";

  if (typeof email === "string") {
    for (let i = 0; i < email.length; i++) {
      if (email[i] === " ") {
        return false;
      }
    }

    if (chars.includes(email[0])) {
      return false;
    } else if (email.includes("@") && email.endsWith(".com")) {
      return true;
    } else {
      return true;
    }
  } else {
    return "Invalid";
  }
}

