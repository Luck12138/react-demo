/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper,HomeLeft, HomeRight, BackTop } from './style'
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://uploadfiles.nowcoder.com/images/20230711/966586560_1689052525147/4B2E079D7DFD6CD8FC51517A0C232F48?x-oss-process=image%2Fresize%2Cw_500%2Ch_650%2Cm_mfit%2Fformat%2Cpng" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null}
        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) =>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(e){
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})


export default connect(mapState, mapDispatch)(Home);