import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PubSub from 'pubsub-js'

import { NavigatorName } from '../../constant/NavigatorContant'
import { PubsubName } from '../../constant/PubsubContant'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as showInfoActions from '../../store/actions/showInfo'

class Message extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    render() {
        return (<View>
            <Text>Message</Text>
            <Button title='sendToApp' 
            onPress={()=>{
                PubSub.publish(PubsubName.toastSubscribe, 'Message');
            }}/>
            <Button title='changeRedux' 
            onPress={()=>{
               this.props.showInfoActions.save({
                   info: 'state showinfo.info'
               })
            }}/>
            <Button title='opeChatPrivate' 
            onPress={()=>{
                this.props.navigation.navigate(NavigatorName.ChatPrivate,{
                    id: 123,
                    name: 'ChatPrivate'
                })
            }}/>
            <Button title='openChatGroup' 
            onPress={()=>{
                this.props.navigation.navigate(NavigatorName.ChatGroup,{
                    id: 123,
                    name: 'ChatGroup'
                })
            }}/>
            <Button title='openContact' 
            onPress={()=>{
                this.props.navigation.navigate(NavigatorName.Contact,{
                    id: 123,
                    name: 'Contact'
                })
            }}/>
        </View>)
    }
}

function mapStateToProps(state) {
    return {
        showInfo: state.showInfo,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        showInfoActions: bindActionCreators(showInfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)