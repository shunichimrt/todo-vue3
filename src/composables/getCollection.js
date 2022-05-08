import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

const getCollection = () => {
  const documents = ref(null)

  const colRef = collection(db, 'todos')
  const q = query(colRef, orderBy('timestamp', 'desc'))
  onSnapshot(q, (snapshot) => {
    let results = []
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id, value: false })
    })
    documents.value = results
  })
  return { documents }
}

export default getCollection
