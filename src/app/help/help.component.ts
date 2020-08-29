import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent implements OnInit {

  links: Link[] = [];

  constructor() { }

  ngOnInit(): void {
    this.links = this.populateLinks();
  }

  populateLinks(): Link[] {
    const links: Link[] = [
      { title: 'Angular Documentation', link: 'https://angular.io/docs', image: 'assets/img/angular.png' },
      { title: 'Node.js Documentation', link: 'https://nodejs.org/en/docs/', image: 'assets/img/node.png' },
      { title: 'Typescript Documentation', link: 'https://www.typescriptlang.org/docs/home.html', image: 'assets/img/typescript.png' },
      { title: 'Angular Material Webpage', link: 'https://material.angular.io/', image: 'assets/img/material.png' },
      { title: 'Visual Studio Code', link: 'https://code.visualstudio.com/', image: 'assets/img/vscode.png' },
      { title: 'Github Repository', link: 'https://github.com/Juanflu/bu-demo', image: 'assets/img/github.png' },
      { title: 'StackBlitz', link: 'https://stackblitz.com/', image: 'assets/img/stackblitz.png' }
    ];

    return links;
  }
}

export class Link {
  title: string;
  link: string;
  image: string;
}
