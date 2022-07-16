import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { admin_id } = req.headers;
    const docRef = doc(db, "admin", admin_id);

    getDoc(docRef).then((doc) => {
      res.status(200).json({ status: "success", data: doc.data(), id: doc.id });
    });
  }
}
