import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  agentMenu = [
	{
	name: 'Naslovna',
	router: '',
	},
	{
	name: 'O nama',
	router: '/aboutus',
	},
	{
	name: 'Usluge',
	router: '/services',
	},
	{
		name: 'Galerija',
	router: '/contact',
	},
  {
  name: 'Tehnologija',
   router: '/contact',
  },
  {
  name: 'Kontakt',
   router: '/contact',
   },
  ];
  nekretnine = [
	{
	name: 'Facebook',
	router: '/',
	},
	{
	name: 'Twitter',
	router: '/',
	},
	{
	name: 'Instagram',
	router: '/',
	},
	{
	name: 'YouTube',
	router: '/',
	},
  ];
  linkovi = [
	{
	name: 'Politika privatnosti',
	 router: '/privacypolicy',
	},
	{
		name: 'Pravila koriscenja',
	router: '/termsofuse',
	},
  ];
}
