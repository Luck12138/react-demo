import axios from 'axios';
import { CHANGE_HOEM_DATA, ADD_ARTICLE, TOGGLE_TOP_SHOW } from './constants'
import { fromJS } from 'immutable';

const changeHomeData = (result) =>({
  type: CHANGE_HOEM_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addHomeData = (result ,nextPage) =>({
  type: ADD_ARTICLE,
  articleList: fromJS(result.articleList),
  nextPage

})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/ea97246fb1e08286e8028222a51be6b1/test/api/home').then((res) => {
      const result = res.data;
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/ea97246fb1e08286e8028222a51be6b1/test/api/home?page='+page).then((res) => {
      const result = res.data;
      dispatch(addHomeData(result, page+1));
    })
  }
};

export const toggleTopShow = (show) => ({
    type: TOGGLE_TOP_SHOW,
    show
})