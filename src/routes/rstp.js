const Stream = require('node-rtsp-stream-es6')
 
const options = {
  name: 'streamName',
  url: 'rtsp://localhost:8554/mystream',
  port: 8554
}
 
const stream = new Stream(options)
 
export default stream
