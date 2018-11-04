import {getBaner,getBrandList} from "../util/homeapi"
export default {
    namespace:"home",
    state:{
        banner:[],
        index:{list:{}},
        list:{one:{}}
    },
    subscriptions:{},
    effects:{
        *getBannerAPI({ type , payload}, {put,call}){
            let api  = yield call(getBaner)
            yield put({type:"banner",payload:api}) // dispatch
        },
        *getBrandListAPI({type,payload},{put,call}){
            let api = yield call(getBrandList)
            yield put({type:"getBrandList",payload:api})
        }

    },
    reducers:{
        banner(state,action){
            return {...state,banner:action.payload}
        },
        getBrandList(state,action){
            return {...state,index:{list:action.payload}}
        }

    }
}