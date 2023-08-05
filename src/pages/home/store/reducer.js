import { fromJS } from 'immutable';
import { CHANGE_HOEM_DATA, ADD_ARTICLE, TOGGLE_TOP_SHOW } from './constants';

const defaultState =fromJS({
  topicList: [],
  articleList:[],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  // eslint-disable-next-line default-case
  switch(action.type){
    case CHANGE_HOEM_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case ADD_ARTICLE:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.nextPage
      });
    case TOGGLE_TOP_SHOW:
      return state.set('showScroll',action.show);
    default:
      return state;  
  }
}