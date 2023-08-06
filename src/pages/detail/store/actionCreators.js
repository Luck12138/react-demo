import * as constants from './constants'
import axios from "axios"


const changeDetail = (title, content) =>({
  type: constants.CHANGE_DETAILL,
  title,
  content
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/ea97246fb1e08286e8028222a51be6b1/test/detail').then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content))
    })
  }
}