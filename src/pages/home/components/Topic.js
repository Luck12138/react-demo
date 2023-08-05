/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from '../style';
import { connect } from "react-redux";

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return(
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
                <TopicItem key={item.get('id')}>
                <img 
                className="topic-pic" 
                src={item.get('imgUrl')} />
                {item.get('title')}
              </TopicItem>
            )
          })
        }

      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home','topicList'])
});

const mapDispatch = (dispatch) => ({
  
});

export default connect(mapState,mapDispatch)(Topic);