import {
  arrayUnion,
  doc,
  getDocs,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { adminCollection, resultCollection, db } from "../../firebase-config";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { admin_id } = req.headers;
    const quiz_details = req.body;
    const docRef = doc(db, "admin", admin_id);

    updateDoc(docRef, {
      quizes: arrayUnion(quiz_details),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    addDoc(resultCollection, {
      id: quiz_details.id,
      admin_id: admin_id,
      results: [],
    })
      .then((data) => {
        console.log(data);
        res.status(200).json({ status: "success", data: data });
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.method === "GET") {
    const { admin_id, quiz_id } = req.headers;
    getDocs(adminCollection)
      .then((snapshot) => {
        let quiz_data;
        snapshot.docs.forEach((doc) => {
          if (doc.id === admin_id) {
            doc.data().quizes.forEach((quiz) => {
              if (quiz.id === quiz_id) {
                quiz_data = quiz;
              }
            });
          } else {
            console.log("No Quiz found");
          }
        });
        res.status(200).json({ status: "success", data: quiz_data });
      })
      .catch((error) => {
        res.status(500).json({ status: "fail", error: error.message });
      });
  }
}
