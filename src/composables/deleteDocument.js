import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

const deleteDocument = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

export default deleteDocument
