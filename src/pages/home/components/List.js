/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";
import { ListItem, ListInfo,LoadMore } from '../style';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, page } = this.props;
    return(
      <>
      {articleList.map((item,index) => {
        return (
          <Link key={index} to={'/detail/'+item.get('id')}>
          <ListItem>
            <img className="pic" src={item.get('imgUrl')} />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
          </Link>
        )
      })}
      <LoadMore onClick={()=>getMoreList(page)}>
        加载更多
      </LoadMore>
      </>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage']), 
});

const mapDispatch = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  }
});



export default connect(mapState,mapDispatch)(List);