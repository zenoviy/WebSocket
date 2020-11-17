import React from 'react';
import { connect } from 'react-redux';
import { unLogin } from '../actions/loginActions';
import ChatArea from './ChatArea';
import SidePanelArea from './SidePanel';
import SearchFieldArea from './SearchFields';


class Home extends React.Component {
    constructor(props){
        super(props)
        this.unLoginAction = this.unLoginAction.bind(this);
    }
    unLoginAction(){
        this.props.unLogin()
    }
    render(){
        return(
            <main className="social-body">
                <h1>HomePage</h1>
                <p>Chat</p>
                <button onClick={this.unLoginAction}>Unregister</button>

                <ChatArea />
                <SidePanelArea />
                <SearchFieldArea />
            </main>
        )
    }
}

export default connect(store => ({
    loginCheck: store.loginCheck
}), dispatch => ({
    unLogin: () => {
        const loginData = () => { 
            return unLogin(dispatch)
        }
        dispatch(loginData())
    }
}))(Home)

