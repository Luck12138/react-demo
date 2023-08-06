/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { DetailWrapper, Header, Content } from './style'
import { connect } from "react-redux";
import { actionCreators } from './store'

class Detail extends Component {
  render() {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
       </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail();
  }
}

const mapToState =(state) =>({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail());
  }
})

export default connect(mapToState,mapDispatch)(Detail);