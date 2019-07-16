module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  }
  return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  switch (true) {
    case item.enhancement < 15:
      return { ...item, durability: item.durability - 5 };
    case item.enhancement > 16:
      return { ...item, enhancement: item.enhancement - 1 };
    case item.enhancement >= 15:
      return { ...item, durability: item.durability - 10 };
    default:
      return { ...item };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
