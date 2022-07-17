import { doc, getDoc, getDocs, query, where, updateDoc, arrayUnion } from "firebase/firestore";
import { db, resultCollection } from "../../firebase-config";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { admin_id, quiz_id } = req.headers;
    const quiz_result = req.body;
    // const docRef = doc(db, "result", quiz_id);
    try {
      const q = query(resultCollection, where("id", "==", quiz_id));
      getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doci) => {
              // console.log(doc.data(),doc.id);
              const docRef = doc(db, "result", doci.id);
              updateDoc(docRef, {
                results: arrayUnion(quiz_result),
              })
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err);
                });
              return res
                .status(200)
                .json({ status: "success", id: doci.id });
              })
      })
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong', error: error.message });
    }
  } else if (req.method === "GET") {
    const { admin_id, quiz_id } = req.headers;
    try {
      const q = query(resultCollection, where("id", "==", quiz_id));
      getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              return res.status(200).json({ status: "success", data: doc.data(), id: doc.id });
            })
      })
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong', error: error.message });
    }
  }
}
