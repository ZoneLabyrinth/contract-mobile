import * as types from './mutation-type'
// import { }

const mutations = {
    [types.SET_KEYWORD](state,playload){
        state.keyword = playload    
    },
    [types.SET_USERINFO](state,playload){
        state.userInfo = playload
    },
    [types.SET_SEARCHDATE](state,date){
        state.searchDate = date
    }
}

export default mutations