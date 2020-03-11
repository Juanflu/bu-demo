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
    let links: Link[] = [
      { title: "Angular Documentation", link: "https://angular.io/docs", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" },
      { title: "Node.js Documentation", link: "https://nodejs.org/en/docs/", image: "https://nodejs.org/static/images/logo-hexagon-card.png" },
      { title: "Typescript Documentation", link: "https://www.typescriptlang.org/docs/home.html", image: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { title: "Angular Material Webpage", link: "https://material.angular.io/", image: "https://material.angular.io/assets/img/angular-material-logo.svg" },
      { title: "Visual Studio Code", link: "https://code.visualstudio.com/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/64px-Visual_Studio_Code_1.35_icon.svg.png" },
      { title: "Github Repository", link: "https://github.com/Juanflu/bu-demo", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { title: "StackBlitz", link: "https://stackblitz.com/", image: "https://c.staticblitz.com/assets/icon-664493542621427cc8adae5e8f50d632f87aaa6ea1ce5b01e9a3d05b57940a9f.png" }
    ];

    return links;
  }
}


export class Link {
  title: string;
  link: string;
  image: string;
}
