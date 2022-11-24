export default {
    namespaced: true,
    state:{
        userProfile:{}
    },
    actions:{},
    mutations:{
        // 获取用户基本信息 token
        setUserProfile(state, payload){
            state.userProfile =  payload
        }
    }
}