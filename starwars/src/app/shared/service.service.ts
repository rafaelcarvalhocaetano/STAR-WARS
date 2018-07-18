import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ServiceService {

  constructor(private auth: AngularFireAuth) { }


  // Login com email individual
  create(formA, formB) {
    return this.auth.auth.createUserWithEmailAndPassword(formA, formB);
  }

  // login com google-gmail
  google() {
    return this.auth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  // logout com google-gmail
  singOut() {
    return this.auth.auth.signOut();
  }
}
