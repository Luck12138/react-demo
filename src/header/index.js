import React, {PureComponent} from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import  { actionCreators }  from './store/index';
import {HeaderWrapper,
        Logo, Nav, NavItem, NavSearch,
        Addition, Button, SearchWrapper, SearchInfo,
        SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
        SearchInfoList } from './style';

class Header extends PureComponent {
  getListArea = () => {
    const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn,handleChangePage } =this.props;
    const jsList = list.toJS();
    const pageList = [];

    if(jsList.length){
      for (let i =(page-1) * 10; i<page*10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused||mouseIn) {
      return (
      <SearchInfo 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => {
              this.spinIcon =icon
            }} className="iconfont spin">&#xe606;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { list, focused,handleInputFocus,handleInputBlur } =this.props;
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={focused}
              timeout={200}
              classNames="slide"
            >
            <NavSearch 
              className={focused? 'focused': ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}>
            </NavSearch>
            </CSSTransition>
            <i className={focused? 'focused iconfont zoom': 'iconfont zoom' } >&#xe600;</i>
            {this.getListArea()}
          </SearchWrapper>
          
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe601;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      const action =actionCreators.search_focus();
      dispatch(action);
      
    },
    handleInputBlur(){
      const action =actionCreators.search_blur();
      dispatch(action);
    },
    handleMouseEnter() {
      const action =actionCreators.mouseEnter();
      dispatch(action);
    },
    handleMouseLeave() {
      const action =actionCreators.mouseLeave();
      dispatch(action);      
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]ig/,'');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1));   
      }else {
        dispatch(actionCreators.changePage(1)); 
      }           
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);