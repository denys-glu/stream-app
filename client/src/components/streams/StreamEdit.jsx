import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
 
const StreamEdit = (props) => {
  useEffect(()=> {
    props.fetchStream(props.match.params.id);
  }, []);

  return (
    <>
    {
      props.stream ? <div>{props.stream.title}</div>
                   : <div>Loading...</div>
    }
    </>
  )
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream })(StreamEdit);