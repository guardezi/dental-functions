
import * as translate from '@google-cloud/translate'



export const translation = async (data, target) => {
    const translator = new translate.Translate({projectId:"AIzaSyD8CPiljy-lokF1JVAoUqghs6IwJmtPK0A"});
    return await translator.translate(data,target);
}

// // [START translate_quickstart]
// async function quickstart(
//     projectId = 'YOUR_PROJECT_ID' // Your GCP Project Id
// ) {
//     // Imports the Google Cloud client library
//     const { Translate } = require('@google-cloud/translate');

//     // Instantiates a client
//     const translate = new Translate({ projectId });

//     // The text to translate
//     const text = 'Hello, world!';

//     // The target language
//     const target = 'ru';

//     // Translates some text into Russian
//     const [translation] = await translate.translate(text, target);
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
// }
// // [END translate_quickstart]

// const args = process.argv.slice(2);
// quickstart(...args).catch(console.error);