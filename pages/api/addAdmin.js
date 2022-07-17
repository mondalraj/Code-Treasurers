import { adminCollection } from "../../firebase-config";
import { addDoc,getDocs,query,where } from "firebase/firestore";

export default async function addAdmin(req, res) {
    if(req.method === 'POST') {
        const { name, email } = req.body;
        try {
            const data = await addDoc(adminCollection, {
                email: email,
                name: name,
                quizes: [],
              })
            res.status(200).json({ message: 'Successfully added', user: data });
        } catch (error) {
            res.status(404).json({ message: 'Something went wrong', error: error.message });
        }
    }else if(req.method === 'GET'){
        const { email } = req.headers;
        try {
            const q = query(adminCollection, where("email", "==", email));

            getDocs(q).then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    console.log(doc.data(),doc.id); 
                    return res
                      .status(200)
                      .json({ status: "success", id: doc.id });
                    })
            })
        } catch (error) {
            res.status(404).json({ message: 'Something went wrong', error: error.message });
        }
    }
}