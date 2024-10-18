export const ExistParams = (list) =>{
    if(!Array.isArray(list) || list.length === 0){
        throw new Error('list of params not empty required')
    }

    const paramInvalid = list.filter(param => !param);

    if(paramInvalid.length > 0){
        throw new Error('all params required')
    }
}