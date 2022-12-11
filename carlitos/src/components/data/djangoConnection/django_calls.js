
// This Function calls the Django API to create an img from the Open AI Dall-E
export function ai_img_creator(id , prompt){
  // CSRF TOKEN is pourposely excluded check django api for details
  fetch("http://localhost:8000/ai_img_creator", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data_id: id,
      prompt: prompt
    })
  }).then(
    (res) => res.json()
  ).then((data)=>console.log(data)).catch((error)=>console.log(error));
}