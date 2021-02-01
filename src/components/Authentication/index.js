export const isAuthentcated = ()=>{
    if (typeof window == 'undefined'){
        return false;
    }
    if (localStorage.getItem("token")){
        return true;
    }
    else return false;
}