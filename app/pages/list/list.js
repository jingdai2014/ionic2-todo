import {Page, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  static get parameters(){
  	return [[NavController]];
  }

  constructor(nav) {
  	this.nav = nav;
  	this.items = [];
  }

  addItem(){
  	this.nav.push(AddItemPage, {listPage: this});
  }

  saveItem(item){
  	this.items.push(item);
  }

  viewItem(item){
  	this.nav.push(ItemDetailPage, {
  		item: item
  	});
  }
}
