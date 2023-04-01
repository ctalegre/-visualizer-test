import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'
import firebaseApp from '../firebaseApp'

class MaterialsCollection {
  async getByPointId (pointId) {
    const db = getFirestore(firebaseApp)
    const materialsRef = collection(db, 'materials')

    const queryDocs = query(materialsRef, where('points', 'array-contains-any', [pointId]))

    return getDocs(queryDocs)
      .then((querySnapshot) => {
        const pointsList = querySnapshot.docs.map((doc) => doc.data())
        return pointsList
      })
  }
}

export default MaterialsCollection
