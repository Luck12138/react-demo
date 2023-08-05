import React, { PureComponent } from "react";
import { RecommendWrapper,RecommendItem } from '../style'
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return(
      <RecommendWrapper>
        {recommendList.map((item) => {
          return (
            <RecommendItem key={item.get('id')} imgurl={item.get('imgurl')}>
            </RecommendItem>  
          )
        })}
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  recommendList: state.getIn(['home','recommendList'])
})

export default connect(mapState, null)(Recommend);