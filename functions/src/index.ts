import * as functions from 'firebase-functions';
import { db } from './firebase';

import * as translate from './translate';
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });




export const createdNewLanguage = functions.firestore
    .document('languages/{language}')
    .onCreate(async (snap, context) => {
        //     const name = await translate.translation('Olá', context.params['language']);

        const defaultLang = await db.doc('languages/en').get();
        const vars = await defaultLang.data();
        const newLanguage = vars;
        const asyncJobs = [];
        Object.keys(vars).forEach(word => {
            asyncJobs.push(translate.translation(vars[word], context.params['language']).then(t=>{
                newLanguage[word] = t[0];
            }).catch(e=>{
                console.log('error --> ',e);
            }))
        });
        
        await Promise.all(asyncJobs);
        await snap.ref.set(newLanguage);
        console.log('name changed->', newLanguage, vars);
        // perform desired operations ...
    });