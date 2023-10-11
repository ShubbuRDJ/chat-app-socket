import axios from "axios";

// create axios instance with baseURL and x-Api-key
const axiosInstance = axios.create({
    baseURL:'http://localhost:8080/',
})


// *************** Add a request interceptor *********************

axiosInstance.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem('token'));
    if(token)config.headers.Authorization = token;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


// **************function for get request******************** 
export const getRequest = async (url,params)=>{
    try {
        const res = await axiosInstance.get(url,{params});
        return res;
    } catch (error) {
        return error?.response;
    }
}


// function for post request 
export const postRequest = async (url,data)=>{
    try {
        const res = await axiosInstance.post(url,data);
        return res;
    } catch (error) {
        return error?.response;
    }
}


// function for patch request 
export const patchRequest = async (url,data)=>{
    try {
        const res = await axiosInstance.patch(url,data);
        return res;
    } catch (error) {
        return error?.response;
    }
}


// function for put request 
export const putRequest = async (url,data)=>{
    try {
        const res = await axiosInstance.put(url,data);
        return res;
    } catch (error) {
        return error?.response;
    }
}



// function for delete request 
// export const deleteRequest = async (url,id)=>{
//     try {
//         const res = await axios.delete(url,{
//             headers:{
//                 'X-API-KEY': process.env.PANASONIC_API_KEY
//             },
//             params:{id}
//         });
//         return (res.data);
//     } catch (error) {
//         return error;
//     }
// }




export {axiosInstance};
