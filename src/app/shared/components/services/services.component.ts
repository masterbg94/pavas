import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit{
  public innerWidth: number;
  public serviceFirstRow = [
    {
      title: 'Konsultacije pri dizajniranju projekta',
      icon: 'person_pin',
      text: 'Firma „Dom“ vodi računa o željama i vizijama svojih klijenata.' +
        ' U konsultaciji sa Vama naši projektanti će izraditi idejno rešenje prema Vašoj želji i ideji.',
    },
    {
      title: 'Izvodjenje grubih radova i enterijera',
      icon: 'store',
      text: 'Za ove radove možemo ponuditi naše kooperante, za izvođenje radova na zidanju\n' +
        'temelja, ploče kao i podrumskog dela tako da ceo proces od početka do kraja možete\n' +
        'obaviti u saradnji sa nama.',
    },
  ];
  public serviceSecondRow = [
    {
      title: 'Izrada tehnicke dokumentacije',
      icon: 'assignment',
      text: 'U našu ponudu može biti naknadno uključena i izrada tehničke ' +
        'dokumentacije koju izrađuje projektni biro u okviru naše firme' +
        ' za dobijanje lokacijskih uslova, dobijanja građevinske dozvole,' +
        ' prijave radova sve do upotrebne dozvole za objekat kojigradite na Vašoj parceli.',
    },
    {
      title: 'Garancija na izvrsene radove',
      icon: 'security',
      text: 'Firma „Dom“ daje garancije na izvedene radove od dve godine prema zakonskom\n' +
        'roku. Garancija na konstrukciju objekta je 30 godina.'
    }
  ];

  public ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.innerWidth = window.innerWidth;
  }
}
