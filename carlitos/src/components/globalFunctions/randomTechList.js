export default function randomTechList(arr){
  let array = arr.sort(() => Math.random() - 0.5);
  return array
}