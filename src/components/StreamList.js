import React, { Component, } from 'react';
import UserInfo from './UserInfo';
import axios from 'axios';
import styled from 'styled-components';

const Table = styled.table`
  max-width: 900px;
  margin: auto;
  background-color: #093145;
`;

class StreamList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      streamers: [
        'ESL_SC2',
        'OgamingSC2',
        'cretetion',
        'brunofin',
        'freecodecamp',
        'storbeck',
        'habathcx',
        'RobotCaleb',
        'noobs2ninjas',
      ],
      ROOT_URL: 'https://wind-bow.gomix.me/twitch-api/',
      data: [],
    };
  }

  componentWillMount () {
    this.streamChannels(this.state.streamers);
  }

  /* eslint-disable max-len */
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable camelcase */

  streamChannels (streamers) {
    streamers.map((streamer) => {
      const errUrl = 'http://res.cloudinary.com/drgffavwf/image/upload/v1485444534/favicon_10_jt95ty.ico';
      let channelUrl = `${this.state.ROOT_URL}channels/${streamer}`;
      let streamUrl = `${this.state.ROOT_URL}streams/${streamer}`;

      return axios.all([axios.get(channelUrl), axios.get(streamUrl),])
        .then(axios.spread((channelInfo, streamInfo) => {
          if (channelInfo.data.status === 404) {
            channelInfo.data.status = channelInfo.data.message;
            channelInfo.data.logo = errUrl;
            channelInfo.data.display_name = 'whoops...';
          } else if (!streamInfo.data.stream) {
            channelInfo.data.status = 'Offline';
          }

          let newData = this.state.data.slice();
          newData.push(channelInfo.data);
          this.setState({ data: newData, });
        }));
    });
  }

  render () {
    if (this.state.data.length === this.state.streamers.length) {
      const alldata = this.state.data.map((data) => {
        let status = data.status;

        return (
          <UserInfo
            key={data._id}
            name={data.display_name}
            url={data.url}
            status={status}
            logo={data.logo}
          />
        );
      });

      return (
        <div>
          <Table className="table">
            <tbody>
              {alldata}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default StreamList;
