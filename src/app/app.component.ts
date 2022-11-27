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
      name: 'NASLOVNA',
      router: '',
      icon: 'fas fa-home',
    },
    {
      name: 'O NAMA',
      router: 'aboutus',
      icon: 'fas fa-building',
    },
    {
      name: 'USLUGE',
      router: 'services',
      icon: 'fas fa-shopping-bag',
    },
    {
      name: 'TIPSKI OBJEKTI',
      router: 'objects',
      icon: 'fab fa-houzz',
    },
    {
      name: 'DODATNI PROIZVODI',
      router: 'products',
      icon: 'fab fa-houzz',
    },
    {
      name: 'GALERIJA',
      router: 'gallery',
      icon: 'fas fa-camera',
    },
    {
      name: 'TEHNOLOGIJE I SISTEMI GRADNJE',
      router: 'tehnology',
      icon: 'fas fa-sitemap',
    },
    {
      name: 'KONTAKT',
      router: 'contact',
      icon: 'fas fa-map-marked',
    },
  ];

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

}
