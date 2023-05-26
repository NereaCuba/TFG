import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  arrayRemove, arrayUnion } from "firebase/firestore";
import {Timestamp } from 'firebase/firestore';

import { collection, query, where } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})
export class fireStoreService {
   constructor(private db: AngularFirestore) { }
   getAllUsers() {
        return new Promise<any>((resolve)=> {
            this.db.collection('Users').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
        })
    }
    async getUserByID(email) {
        var users =  await new Promise<any>((resolve)=> {
            this.db.collection('Users').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
        })                
        return users.filter(user => user.id === email)[0]
    }
    async addNewUserIfExists(_newId:any) {
        this.db.collection('Users').valueChanges({ idField: 'id' }).subscribe((users:any) => {
            if(!users.charts) {
                return this.db.collection('Users').doc(_newId).set({charts:[]});
            }
        });
    }
    async updateUserCharts(_id:any, formValue:any, image:string, isIframe:boolean): Promise<boolean> {
        try {
            var newEl = { 
                formValue:formValue,
                image:image,
                fechaCreacion: Timestamp.now(),
                isIframe: isIframe
            };
            var a = await this.db.collection('Users').doc(_id).update({charts: arrayUnion(newEl)}) 
            return false;
        } catch (error) {
            return true;
        }
    }
    deleteUserChart(_id:any, elementDelete: any) {
        this.db.collection('Users').doc(_id).update({charts: arrayRemove(elementDelete)});
    }
}