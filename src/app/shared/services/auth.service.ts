import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { fireStoreService } from './fireStore.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  userInfo: any;
  isSigningUp: boolean = false;
  isLoginSubject  = new BehaviorSubject<boolean>(this.hasToken());
  public currentUserSubjectTest: BehaviorSubject<any> = new BehaviorSubject<any>(!localStorage.getItem('user'));
  public currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(!localStorage.getItem('user'));
  constructor(
    public fireStoresvc: fireStoreService,
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */ 
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userData = user;        
        this.userInfo = await this.getUserData(this.userData._delegate.email);
        localStorage.setItem('user', JSON.stringify(this.userData));
        if(!localStorage.getItem('signUp')) {
          this.isLoginSubject.next(true);
        }
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    localStorage.removeItem('signUp');
    this.isLoginSubject.next(true);
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.login();
        this.isLoginSubject.next(true);
        this.router.navigate(['']);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['']);
          }
        });
        this.router.navigate(['']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  private hasToken (): boolean {    
    return !!localStorage.getItem('token');
  }
  login ():void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);

  }
  logout (): void {
    this.router.navigate(['']);
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    localStorage.setItem('signUp', '0');
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {        
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  isLoggedInTest() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['']);
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `Users/${user.email}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
  getUserData(email) {
    return this.fireStoresvc.getUserByID(email);
  }
  SignOut() {
    this.logout();
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoginSubject.next(false);
      this.router.navigate(['sign-in']);
    });
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
}