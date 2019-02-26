import { config } from 'firebase-functions';
import * as admin from "firebase-admin";


admin.initializeApp(config());
export const db = admin.firestore();
export const storage = admin.storage();

