import _axios from '@/utils/http.js'

/**
 * 登陆
 * @param {*} param0 
 * @returns 
 */
export const login = ({phone,password}) =>{
    return _axios({
        url:`/login/cellphone?phone=${phone}&password=${password}`,
    })
}