'use client'

import React, {useEffect} from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from "ol/proj";
import {defaults as defaultInteractions} from "ol/interaction";
import {Coordinate} from "ol/coordinate";

const MapComponent: React.FC = () => {
    useEffect(() => {
            const mapView = new View({
                center: fromLonLat([24.7536, 59.4370]),
                zoom: 6,
                minZoom: 6,
                maxZoom: 8,
            });
            const map = new Map({
                    target: 'map',
                    layers: [
                        new TileLayer({
                            source: new OSM(),
                        }),
                    ],
                    view: mapView,
                    interactions: defaultInteractions({dragPan: false, pinchZoom: false}),
                })
            ;

            const goToCoordinates = (coordinate: Coordinate) => {
                mapView.animate({
                    center: coordinate,
                    duration: 500, // Длительность анимации в миллисекундах
                });
            };

            map.on('singleclick', (event) => {
                goToCoordinates(event.coordinate);
            });

            return () => map.setTarget('map');
        },
        []);

    return view;
};

const view =
    <div id="map" className="w-screen h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            <div className="w-4 h-4 bg-transparent border-2 border-red-500 rounded-full"></div>
        </div>
    </div>

export default MapComponent;