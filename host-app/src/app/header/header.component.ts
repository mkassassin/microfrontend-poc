import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { DataService } from 'microAppOne/HostDataService'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  accountIdentified: boolean = true;
  currentRoute: string = '';
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {	
  }

  ngOnInit() {
	this.router.events.subscribe(() => {
	  this.currentRoute = this.router.url;
	  this.accountIdentified = this.currentRoute !== '/account/signin' && this.currentRoute !== '/account/signup';
	});
 }


}
