/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js';

import {Client, Account, ID} from "appwrite";



export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account =  new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            } else {
                return console.log(error);
                
            }
        } 
        catch (error) {
         throw error;   
        }
    }


    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            return console.log(error);
        }
        
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service  :: getCurrentUser :: error", error)
        }
        return null;
    }


    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Apwrite service :: logout :: error", error)
        }
    }
}

const authService =  new AuthService();


export default authService;