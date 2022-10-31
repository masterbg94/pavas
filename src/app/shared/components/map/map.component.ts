import { Component, Input } from '@angular/core';


@Component({
 selector: 'app-map',
 templateUrl: './map.component.html',
 styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() markers: Marker[] = [
	{
		lat: 46.204391,
		lng: 6.143158,
		label: '',
		draggable: true,
	},
	{
		lat: 46.204391,
		lng: 6.143158,
		label: '',
		draggable: true,
	},
	{
		lat: 47.559601,
		lng: 7.588576,
		label: '',
		draggable: false,
	},
  ];
  // google maps zoom level
  zoom = 10;

  // initial center position for the map
  @Input() lat: number = 43.6050818;
  @Input() lng: number = 20.190402;
  public customStyle = [
	{
		'featureType': 'administrative',
		'elementType': 'all',
		'stylers': [
		{
			'saturation': '-100',
		},
		],
	},
	{
		'featureType': 'administrative.province',
		'elementType': 'all',
		'stylers': [
		{
			'visibility': 'off',
		},
		],
	},
	{
		'featureType': 'landscape',
		'elementType': 'all',
		'stylers': [
		{
			'saturation': -100,
		},
		{
			'lightness': 65,
		},
		{
			'visibility': 'on',
		},
		],
	},
	{
		'featureType': 'poi',
		'elementType': 'all',
		'stylers': [
		{
			'saturation': -100,
		},
		{
			'lightness': '50',
		},
		{
			'visibility': 'simplified',
		},
		],
	},
	{
		'featureType': 'road',
		'elementType': 'all',
		'stylers': [
		{
			'saturation': '-100',
		},
		],
	},
	{
		'featureType': 'road.highway',
		'elementType': 'all',
		'stylers': [
		{
			'visibility': 'simplified',
		},
		],
	},
	{
		'featureType': 'road.arterial',
		'elementType': 'all',
		'stylers': [
		{
			'lightness': '30',
		},
		],
	},
	{
		'featureType': 'road.local',
		'elementType': 'all',
		'stylers': [
		{
			'lightness': '40',
		},
		],
	},
	{
		'featureType': 'transit',
		'elementType': 'all',
		'stylers': [
		{
			'saturation': -100,
		},
		{
			'visibility': 'simplified',
		},
		],
	},
	{
		'featureType': 'water',
		'elementType': 'geometry',
		'stylers': [
		{
			'hue': '#ffff00',
		},
		{
			'lightness': -25,
		},
		{
			'saturation': -97,
		},
		],
	},
	{
		'featureType': 'water',
		'elementType': 'labels',
		'stylers': [
		{
			'lightness': -25,
		},
		{
			'saturation': -100,
		},
		],
	},
  ];
}
// just an interface for type safety.
export interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
