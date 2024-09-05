import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
  deleteUser
 } from '@angular/fire/auth'
 
export interface LoginInfo {
  email: string;
  password: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(private auth: Auth) { }
 
  register({email, password}: LoginInfo) : Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
 
  login({email, password}: LoginInfo) : Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
 
  loginWithGoogle() : Promise<any> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
 
  logout() : Promise<any> {
    return signOut(this.auth);
  }
 
  getCurrentUser() : User | null {
    return this.auth.currentUser;
  }

 deleteRegister(uid: string) : Promise<any> {
  let user : User = {uid} as User;
  return deleteUser(user);
  }

  /*deleteRegister() : Promise<any> {
    const user = this.auth.currentUser;
    
    if (user) {
      return deleteUser(user).catch((error) => {
        console.error('Error al eliminar el usuario:', error);
        throw error;
      });
    } else {
      return Promise.reject('No hay un usuario autenticado para eliminar.');
    }
  }*/






    
}
 