import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.0902,
      lng: -95.7129
    },
    zoom: 7
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCb2vBjjdkjoMfv8jqMpFX_pinIGSyf8ZY',
          // Looks like I need a billing account to enable the dang thing
          // Also, security is a thing: https://medium.com/better-programming/how-to-hide-your-api-keys-c2b952bc07e6
          // I have no clue how to set up a reverse proxy server (and I'm not paying for cloudflare), so I'm throwing in the towel.
          // https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/
            language: 'en',
             }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.0902}
            lng={-95.7129}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;