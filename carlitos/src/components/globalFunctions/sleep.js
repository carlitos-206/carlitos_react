// this a simmple timeout function to slow down the app where needed for visual effects
// it only takes milliseconds
export default function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}