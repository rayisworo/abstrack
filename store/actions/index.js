export const SAVE_COUNTRY = "SAVE_COUNTRY";
export const CLEAR_COUNTRY = "CLEAR_COUNTRY";

export const saveCountry = (data) =>{
    return{
        type:SAVE_COUNTRY,
        data:data
    };
};

export const clearCountry = () =>{
    return{
        type:CLEAR_COUNTRY
    };
};