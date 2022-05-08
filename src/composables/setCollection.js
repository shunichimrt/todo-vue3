import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const setCollection = async (params) => {
  await addDoc(collection(db, 'todos'), {
    ...params,
    timestamp: Timestamp.fromDate(new Date()),
  })
}

export default setCollection
