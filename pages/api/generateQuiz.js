import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore'

export default async function l(req, res) {
    if(req.method === 'POST') {
        try {
            const db = getFirestore();
            const colRef = collection(db, 'admin');
            await addDoc(colRef, {
                title: addBookForm.title.value,
                author: addBookForm.author.value,
              })
            res.status(200).json({ message: 'Successfully signed in', user: cred });
        } catch (error) {
            res.status(404).json({ message: 'User not found/Wrong password', error: error.message });
        }
    }else if(req.method === 'GET'){

    }
}