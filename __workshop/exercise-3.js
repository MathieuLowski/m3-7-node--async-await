// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    let sum = 0;
    for (let i = 0; i < 3; i++);
    sum += await doublesLater(num);
    return sum;
  } catch (err) {
    console.log(err);
  }
};
// 4. verification
handleSum(10).then((ans) => console.log(ans));
