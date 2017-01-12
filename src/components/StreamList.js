import React, {Component} from 'react';
import {streamChannels} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserInfo from './UserInfo';

class StreamList extends Component {
    constructor(props){
        super(props);

        this.state =  {streamers: [""] };
    }

    componentWillMount(){
        this.props.streamChannels(this.state.streamers);
    };


    render(){
        let streamChannels = this.props.channelData[0];
        if(this.props.channelData.length === 0){
            return <div></div>;
        }
        console.log(streamChannels);

        return(
            <thead>
            {streamChannels.map((eachChannel) => {
                return (
                    <UserInfo
                        eachChannel={eachChannel}
                    />
                );
            })}
            </thead>
        );
    }
}

function mapStateToProps({channelData}) {
    return {channelData};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({streamChannels}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);

