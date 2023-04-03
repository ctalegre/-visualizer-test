import { collection, getDocs, getFirestore } from 'firebase/firestore'
import firebaseApp from '../firebaseApp'

class PointsCollection {
  async getAll () {
    const db = getFirestore(firebaseApp)
    return getDocs(collection(db, 'points'))
      .then((querySnapshot) => {
        const pointList = querySnapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data()
        }))
        return pointList
      })
  }
}

export default PointsCollection
