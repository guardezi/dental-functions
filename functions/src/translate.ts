
import * as translate from '@google-cloud/translate'



export const translation = async (data, target) => {
    const translator = new translate.Translate({projectId:"AIzaSyD8CPiljy-lokF1JVAoUqghs6IwJmtPK0A"});
    return await translator.translate(data,target);
}