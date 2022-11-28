import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('drawer') drawer: MatDrawer;
  innerWidth: number;
  name: string;
  collapsed: false;
  pageName: string;
  isOpen = true;

  menu = [
    {
      name: 'MENU.home',
      router: '',
      icon: 'fas fa-home',
    },
    {
      name: 'MENU.aboutus',
      router: 'aboutus',
      icon: 'fas fa-building',
    },
    {
      name: 'MENU.services',
      router: 'services',
      icon: 'fas fa-shopping-bag',
    },
    {
      name: 'MENU.objects',
      router: 'objects',
      icon: 'fab fa-houzz',
    },
    {
      name: 'MENU.products',
      router: 'products',
      icon: 'fab fa-houzz',
    },
    {
      name: 'MENU.gallery',
      router: 'gallery',
      icon: 'fas fa-camera',
    },
    {
      name: 'MENU.technology',
      router: 'tehnology',
      icon: 'fas fa-sitemap',
    },
    {
      name: 'MENU.contact',
      router: 'contact',
      icon: 'fas fa-map-marked',
    },
  ];

  public navbarCollapsed: boolean;
  public availableLanguages: any[] = [
    {
      label: 'serbian',
      code: 'rs-RS',
      value: 'sr',
      flag: '../../../../assets/images/serbian.png'
    },
    // {
    //   label: 'Slovenian',
    //   code: 'sl-SL',
    //   value: 'sl',
    //   flag: '../../../../assets/images/slovenian.png'
    // },
    {
      label: 'english',
      code: 'en-US',
      value: 'en',
      flag: '../../../../assets/images/usflag.png'
    },
    // {
    //   label: 'Deutsch',
    //   code: 'de-DE',
    //   value: 'de',
    //   flag: '../../../../assets/images/germanflag.png'
    // }
  ];
  currentLanguage = this.availableLanguages[0];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private translateService: TranslateService) {
    translateService.addLangs(['sr', 'en']);
    translateService.setDefaultLang('sr');
    translateService.use('sr');
  }

  public ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.router.events.subscribe(arg => {
      window.scrollTo(0, 0);
      if (arg instanceof NavigationEnd) {
        this.name = this.getTitle(this.activatedRoute.snapshot);
        if (this.innerWidth < 992) {
          const doc = document.querySelector('.mat-drawer-content');
          if (doc != null) {
            doc.scrollTop = 0;
          }
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.innerWidth = window.innerWidth;
  }

  public getTitle = (snapshot: ActivatedRouteSnapshot): string => {
    if (!!snapshot && !!snapshot.children && !!snapshot.children.length) {
      return this.getTitle(snapshot.children[0]);
    } else if (!!snapshot.data && !!snapshot.data['title']) {
      return snapshot.data['title'];
    } else {
      return '';
    }
  }

  public setLanguage(language: any) {
    this.currentLanguage = language;
    this.translateService.use(language.value);
  }
}
