import React, {Component} from 'react';
import UserInfo from './UserInfo';
import axios from 'axios';

class StreamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamers: ["ESL_SC2", "OgamingSC2", "cretetion", "brunofin", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
      ROOT_URL: 'https://wind-bow.gomix.me/twitch-api/',
      data: []
    };
  }

    componentWillMount(){
        this.streamChannels(this.state.streamers);
    }


    streamChannels(streamers) {

      streamers.map(streamer => {
        let url = `${this.state.ROOT_URL}channels/${streamer}`;
        return axios.get(url).then(request => {
          console.log(request.data);
          let newData = this.state.data.slice();
          newData.push(request.data);
          this.setState({ data: newData});
        });
      });
    }

    render(){
      if (this.state.data.length === 9) {
        const alldata = this.state.data.map(data => {

          let status = data.status;
          if (status === 404) status = data.message;
          if (status == null) status = 'Offline';

          return (
            <UserInfo
              name={data.display_name}
              url={data.url}
              status={status}
              logo={data.logo} />
          );
        });

        return (
          <div>{alldata}</div>
        );
      }
      else {
        return (
          <div>Loading...</div>
        );
      }
    }
 }

export default StreamList;
