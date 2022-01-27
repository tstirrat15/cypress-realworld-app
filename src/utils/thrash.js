export const ITERATIONS = 10000000;
const thrash = (iterations = ITERATIONS) => {
  console.log("here we thrash");
  let counter = 0;
  for (let i = 0; i < iterations; i++) {
    counter++;
  }
  return counter;
};
export default thrash;
