import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LISTS } from './list-array';
import { FurnitureApiService } from '@shared/service/furniture-api.service';
import { Router } from '@angular/router';
import { MessageService } from '@shared/service/message.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  categorylist: any;
  constructor(private apiService: FurnitureApiService, private router: Router , private messageService: MessageService) {
 
  }
 

  ngOnInit() {
   
  this.categorylist = this.apiService.getcategoryList().pipe();
  console.log(this.categorylist);
   
  }

  navigatelistpage(name) {
    this.router.navigateByUrl('/furniture/list/' + name);
    this.messageService.sendCategory(name);
  }
}
