import { Component, OnInit, HostListener,Input,Output, EventEmitter} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import { text } from '../../models/text';

/* 
*@author: Peter Cai
*Revised:11/22/2020 modify import,constructor,ngOnInit()
*
*Revised:12/6/2020 add setLanguage() function
*/

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  @Input() language:string;
  @Output() setLang = new EventEmitter<string>();


  langs:{};

  constructor() {}

  ngOnInit(): void {
    this.langs = {
      getinvolved:{CN:'志愿机会', EN:'Get Involved'},
      career:{CN:'工作机会',EN:'Career'},
      immigration:{CN:'移民咨询',EN:'Immigration'},
    }
  }

   /*
   * setLanguage
   * This method change language in app.component
   * @param lang: value of Language in app.component
   */

  setLanguage(lang: string): void {
    this.setLang.emit(lang);
  }
}
