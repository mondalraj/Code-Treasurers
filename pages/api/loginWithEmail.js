import { auth } from '../../firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default async function loginWithEmail(req, res) {
    if(req.method === 'POST') {
        const { email, password } = req.body;
        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            res.status(200).json({ success: true, message: 'Success', user: cred });
        } catch (error) {
            res.status(404).json({ success: false, message: 'Error creating user', error: error.message });
        }
    }else if(req.method === 'GET') {
        const { email, password } = req.headers;
        try {
            const cred = await signInWithEmailAndPassword(auth, email, password);
            res.status(200).json({ success: true, message: 'Successfully signed in', user: cred });
        } catch (error) {
            res.status(404).json({ success: false, message: 'User not found/Wrong password', error: error.message });
        }
    }
}