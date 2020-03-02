import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  showMore: boolean = true;

  switchInfo = [
    {
      title: 'Support 24/7',
      // tslint:disable-next-line: max-line-length
      text: 'Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.', 
      id: 1,
      show: true,
      class: 'active-button'
    },

    {
      title: 'Best Quality',
    // tslint:disable-next-line: max-line-length
      text: 'Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.',
      id: 2,
      show: false,
      class: 'unactive-button'

    },

    {
      title: 'Fastest Delivery',
      // tslint:disable-next-line: max-line-length
      text: 'Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.',
      id: 3,
      show: false,
      class: 'unactive-button'

    },

    {
      title: 'Customer Care',
      // tslint:disable-next-line: max-line-length
      text: 'Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.',
      id: 4,
      show: false,
      class: 'unactive-button'

    },

    {
      title: 'Over 200 Satisfied Customers',
      // tslint:disable-next-line: max-line-length
      text: 'Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.',
      id: 5,
      show: false,
      class: 'unactive-button'

    },
  ];


  constructor() { }


  ngOnInit() {
  }


  // public clickMore(): void {
  //   console.log('dfghnm,');

  public clickMore(id:number): void {
    console.log(id);
    console.log(this.switchInfo);
    this.switchInfo.filter((item) => {
      if (item.id === id) {
        item.show = !item.show;
        item.class = 'active-button';
      } else {
        item.show = false;
        item.class = 'unactive-button';

      }
    });

  }

}
