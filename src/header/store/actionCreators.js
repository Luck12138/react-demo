import * as actionTypes from './constants'
import axios from 'axios';
import { CHANGE_LIST } from './constants'
import { fromJS } from 'immutable';

export const search_focus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const search_blur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
  return(dispatch) => {
    axios.get('https://www.fastmock.site/mock/ea97246fb1e08286e8028222a51be6b1/test/api/searchList')
    .then((res) => {
      const data = res.data.data;
      dispatch(change_list(data))
    }).catch(()=> {
       console.log()
    }) 
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

const change_list = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

