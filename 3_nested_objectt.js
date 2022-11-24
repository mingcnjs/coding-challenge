const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions

  if (Array.isArray(obj)) {
    return obj.map((item) => transformValue(item));
  } else if (typeof obj === "object") {
    return Object.keys(obj).reduce(
      (acc, key) => ({ ...acc, [key]: transformValue(obj[key]) }),
      {}
    );
  } else if (typeof obj === "number") {
    return obj + 1;
  } else if (typeof obj === "string") {
    return `${obj} AI`;
  }

  return obj;
};

console.log(
  transformValue({
    a: 123,
    b: "hero",
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ["abc", "def"],
    },
  })
);
