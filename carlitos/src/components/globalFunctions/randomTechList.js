export default function randomTechList(arr){
  const max = arr.length-1
  let array = []
  for(let i = 0; i <= max; i++){
    let randomIdx = Math.floor(Math.random() * max) + 1
    if(array.includes(randomIdx)){
      let newRandom = Math.floor(Math.random() * max) + 1
      array.push(newRandom)
      if(array.includes(randomIdx)){
        let newRandom = Math.floor(Math.random() * max) + 1
        array.push(newRandom)
        if(array.includes(randomIdx)){
          let newRandom = Math.floor(Math.random() * max) + 1
          array.push(newRandom)
        }else{
          array.push(randomIdx)
        }
      }else{
        array.push(randomIdx)
      }
    }else{
      array.push(randomIdx)
    }
  }
  return array
}