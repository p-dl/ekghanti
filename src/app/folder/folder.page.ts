import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { verticalNavigations } from '../core/fake-data';
import { AuthStateService } from '../core/services';
import { AppStateService } from '../core/services/app-state.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  username = AppStateService.username$;
  isPopoverOpen = false;  
  verticalNavs = verticalNavigations;
  logo = '';
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }
  ngOnInit() {
    this.http.get('assets/images/logo.jpg', { responseType: 'blob' }).subscribe((blob: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.logo = reader.result as string;
      };
      reader.readAsDataURL(blob);
    });
  }
  openPopover() {
    this.isPopoverOpen = true;
  }
  closePopover() {
    this.isPopoverOpen = false;
  }
  onLogout() {
    AuthStateService.authUser.next({isLoggedIn: false});
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}

