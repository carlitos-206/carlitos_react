import {collection, getDoc, setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseAuth'
import { v4 as uuidv4 } from 'uuid';

// This function is a visitor count -> equivalent to a view count on youtube
// This function calls firebase to ensure the latest count and update it's servers within a random time frame to avoid data clashes
// This is going to be a collection of firebase send offs ie other random legal data
export async function visitorCount(){
  // visitor ID is created in App.js
  let visitor_id = sessionStorage.getItem('visitor_id')
  // Firebase send off
  const table = collection(db, 'visitorCount')
      setDoc(doc(table, visitor_id), {
        type: 'Visitor Counter',
        id: visitor_id,
        date: new Date()
      })
}

// Once the user has agreed to the cookies then it calls this function
// This function sends the information to Firbase Firestore 
export async function visitorCollection(tree) {
  // This will be the unique id for the document
  let unique_id = uuidv4()
  sessionStorage.setItem("data_id", unique_id)
  // This ID will link the visit to the device...its like a SQL foriegn key 
  let visitID = sessionStorage.getItem('visitor_id')
  // Firbase Send OFf
  const entriesRef = collection(db, 'visitorCollection');
  setDoc(doc(entriesRef, unique_id), {
    first_date_visit: new Date().toString(), 
    id: unique_id,
    visitCount: 1,
    visit_0: {
      date_visited: new Date().toString(),
      id: visitID,
      location: {
        ip: tree.location.ip,
        city: tree.location.city,
        state: tree.location.state,
        postal: tree.location.postal,
        country: tree.location.country,
        timezone: tree.location.timeZone,
        timeDiff: tree.location.timeDiff,
        exact_location: {
          lat: tree.location.exactLocation.lat,
          lon: tree.location.exactLocation.lon,
        },
      },
      device: {
        type: tree.device.type,
        model: tree.device.model,
        vendor: tree.device.vendor,
        os:{
          name: tree.device.os.name,
          version: tree.device.os.version
        },
        cpu_architecture: tree.device.cpu_architecture,
        screenWidth: tree.device.screenWidth,
        screenHeight: tree.device.screenHeight,
      },
      browser: {
        name: tree.browser.name,
        version: tree.browser.version,
        engine:{
          name: tree.browser.engine.name,
          version: tree.browser.engine.version
        }
      }}
  });
}

// This function gets called only if theres a data ID in sessionss ---> see --> ~./components/collectionWindows.jsx
export async function updateVisitor(){
  // Link the visitID to the new visit visitor Collection
  const visitID = sessionStorage.getItem('visitor_id')
  // This is the key to the
  const data_id = sessionStorage.getItem('data_id')
  const docRef = doc(db, 'visitorCollection', data_id)
  const snapShot = await getDoc(docRef)
  let num = 0;
  let object = snapShot.data()
  let visitCount = snapShot.data().visitCount
  for ( const property in object){
    if(property.startsWith('visit_')){
      num +=1
    }
  }
  // Turn the data into an object 
  const data = JSON.parse(sessionStorage.getItem('data'))
  data['id'] = visitID
  data['date_visited'] = new Date().toString()
  let document = {
    visitCount: visitCount+1,
  }
  document[`visit_${num}`] = data
  updateDoc(docRef, document)
}
