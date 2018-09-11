import * as types from './mutation-type'
// import { }

const mutations = {
    [types.SET_KEYWORD](state,playload){
        state.keyword = playload    
    }
}

export default mutations