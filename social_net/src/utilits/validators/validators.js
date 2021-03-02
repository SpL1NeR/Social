export const requiredField = (value) =>{
    if (value) return undefined;
    return 'Field is required';
    
}

export const maxLenghthCreator  = (maxLenghth) => (value) =>{
    if (value && value.length > maxLenghth) return `Max length is ${maxLenghth} symbols`
    return undefined; 
}
