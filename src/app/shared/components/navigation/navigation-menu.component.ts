import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})

export class NavigationMenuComponent implements OnInit {
  public navbarCollapsed: boolean;
  menu = [
	{
		name: 'NASLOVNA',
		router: '',
	},
	{
		name: 'O NAMA',
		router: 'aboutus',
	},
	{
		name: 'USLUGE',
		router: 'services',
	},
  {
    name: 'TIPSKI OBJEKTI',
    router: 'objects',
  },
  {
    name: 'DODATNI PROIZVODI',
    router: 'products',
  },
	{
		name: 'GALERIJA',
		router: 'gallery',
	},
	{
    name: 'TEHNOLOGIJE I SISTEMI GRADNJE',
    router: 'tehnology',
	},
    {
      name: 'KONTAKT',
      router: 'contact',
    },
  ];
  public availableLanguages: any[] = [
    {
      label: 'Serbian',
      code: 'rs-RS',
      flag: '../../../../assets/images/serbian.png'
    },
    {
      label: 'Slovenian',
      code: 'sl-SL',
      flag: '../../../../assets/images/slovenian.png'
    },
    {
      label: 'English',
      code: 'en-US',
      flag: '../../../../assets/images/usflag.png'
    },
    {
      label: 'Deutsch',
      code: 'de-DE',
      flag: '../../../../assets/images/germanflag.png'
    }
  ];
  currentLanguage = this.availableLanguages[0];

  public ngOnInit(): void {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos);

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').classList.remove('hidden');

      } else {
        if (currentScrollPos > 60) {
          document.getElementById('header').classList.add('hidden');

        }
      }
      prevScrollpos = currentScrollPos;
    };
  }

  public setLanguage(language: any) {
    this.currentLanguage = language;
  }
}
