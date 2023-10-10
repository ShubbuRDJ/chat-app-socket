import axios from "axios";

// create axios instance with baseURL and x-Api-key
const axiosInstance = axios.create({
    baseURL:'http://localhost:8080/',
    headers:{
        'X-API-KEY':'59116031-3be4-400b-ad5b-cc93fe4f985a',
        'Authorization':localStorage.getItem('token'),
    },
})


// *************** Add a request interceptor *********************

// axiosInstance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('ACCESS_TOKEN');
//     if(token)config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });


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
