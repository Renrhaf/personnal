import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { number } from "prop-types";
import { icon } from './ContactMapIcon';

const State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class ContactMap extends Component<{}, State> {
  state = {
    lat: 45.535130,
    lng: -73.565460,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
        <Map center={position} zoom={this.state.zoom} style={{ height: '650px', width: '100%' }}>
          <TileLayer
              attribution='&amp;copy <a href="https://stadiamaps.com/">Stadia Maps</a> &amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon} />
        </Map>
    )
  }
}
