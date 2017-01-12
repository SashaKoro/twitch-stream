import {STREAM_CHANNELS} from './types';
import axios from 'axios';

const ROOT_URL = 'https://wind-bow.gomix.me/twitch-api/';

export function streamChannels(streamer) {

        let url = `${ROOT_URL}channels/${streamer}`;
        let request = axios.get(url);

        return {
            type: STREAM_CHANNELS,
            payload: request
        }

}
