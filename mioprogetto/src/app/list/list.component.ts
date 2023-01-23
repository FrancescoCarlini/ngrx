import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  users: [boolean, User][] = [];
  ngOnInit(): void {
    let user1 = new User("leonardo.palmieri", "Leonardo", "Palmieri", "leo.palmieri@gmail.com",true)
    let user2 = new User("immacolata.conti", "Immacolata", "Conti", "imma.conti@gmail.com",true)
    let user3 = new User("marcello.iori", "Marcello", "Iori", "marcello.iori@gmail.com", false)
    let user4 = new User("francesco.carlini", "Francesco", "Carlini", "fra.carlini@gmail.com", false)
    let list = [user1, user2, user3, user4]
    list.map(user => this.users.push([user.isAssociato, user]))
  }

}
