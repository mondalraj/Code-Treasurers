import { doc, getDoc, getDocs, query, where, updateDoc, arrayUnion } from "firebase/firestore";
import { db, resultCollection } from "../../firebase-config";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { admin_id, quiz_id } = req.headers;
    const quiz_result = req.body;
    const docRef = doc(db, "result", quiz_id);

    updateDoc(docRef, {
      results: arrayUnion(quiz_result),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.method === "GET") {
    const { admin_id, quiz_id } = req.headers;
    const resultRef = doc(resultCollection, quiz_id);
    getDoc(resultRef).then((doc) => {
      res.status(200).json({ status: "success", data: doc.data(), id: doc.id });
    });
    // getDocs(resultRef).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     return res
    //       .status(200)
    //       .json({ status: "success", data: doc.data(), id: doc.id });
    //   });
    // });
  }
}
