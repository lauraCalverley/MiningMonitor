import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';

import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[]
  originalUsers: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsersProvider) {
    githubUsers.load().subscribe(users => {
      this.users = users
      this.originalUsers = users
    })
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      this.users = this.originalUsers
    } else {
      this.githubUsers.searchUsers(term).subscribe(users => {
        console.log(users)
        this.users = users.items
      })
    }
  }

}
