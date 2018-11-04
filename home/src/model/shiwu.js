import axios from 'axios'
export default {
    namespace: 'shiwu',
    state: {
        data:{
            data:{
                banner:[],
                column:[],
                recommendOne:{},
                recommendTwo:{},
                recommendThree:{},
                tenfifteen:[]
            }
           
        }
    },
    reducers: {
      getData (state, {payload}) {
          console.log(payload,555)
        // console.log(arguments);
        // debugger
        return {
          ...state,
          ...payload
        }
      }
    },
    effects: {
      *getNewData({payload}, {call, put}) {
        console.log(1111)
        let getUserNameAPI = () => {
          // console.log(arguments);
          return axios.get('https://www.easy-mock.com/mock/5bd1b10c532cbd205ac65297/zy/shiwu').then(res => {
             return res;
          })
        };
        let res = yield call(getUserNameAPI)
        // debugger
        // console.log(payload, res);
        // yield put({type: 'count/add', payload: 'add'});
        yield put({type: 'getData', payload: res})
      },
    }
  }
  