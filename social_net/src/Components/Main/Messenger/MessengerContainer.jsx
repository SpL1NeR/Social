import { sendMessageCreator } from '../../../redux/messanges-reduser';
import Messenger from './Messenger';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) =>{
  return{
messangesPage: state.messangesPage,
  }
}

let mapDispatchToprops = (dispatch) =>{
  return{

    sendMessage: (newMessageBody) => {
  dispatch(sendMessageCreator(newMessageBody));
}
  }
}
//
export default compose(
  withAuthRedirect,
  connect(mapStateToProps,mapDispatchToprops),
  
  )(Messenger)
