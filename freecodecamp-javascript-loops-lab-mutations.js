const mutation = (arr) => {
  if (
    !Array.isArray(arr) ||
    typeof arr[0] !== "string" ||
    typeof arr[1] !== "string"
  ) {
    return "Invalid string";
  }

  const target = arr[0].toLowerCase();
  const check = arr[1].toLowerCase();

  if (target.trim() === "" || check.trim() === "") {
    return "Target String and String to check must have value.";
  }

  for (const char of check) {
    if (!target.includes(char)) {
      return false;
    }
  }

  return true;
};

console.log(mutation(["hellow", "HELLO"]));
