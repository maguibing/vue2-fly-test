import _axios from '@/utils/http.js'
// import axios from "axios"

/**
 * 上传文件
 * @param {*} params 
 * @returns 
 */
 export const policy = ({baseUrl='http://192.168.120.92:8107',fileName, fileSize, fileSha1}) =>{
    return axios({
        url: baseUrl+`/sys/file/policy`,
        method:"get",
        params: {
            folder:"4",
            fileName,
            fileSize,
            fileSha1
        }
    })
}

/**
 * 走请求拦截器
 * @param {*} param0 
 * @returns 
 */
export const policy1 = ({fileName, fileSize, fileSha1 }) =>{
    return _axios({
        url:`/sys/file/policy`,
        method:"get",
        params: {
            folder:"4",
            fileName,
            fileSize,
            fileSha1
        }
    })
}