import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  // this class is used to interact with Appwrite authentication services
  // It handles user creation, login, fetching current user, and logout
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
      .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
    this.account = new Account(this.client); // this is the account service of Appwrite
  }
  async createUser({ email, password, name }) {
    try {
      const useAccount = await this.account.create(
        // Create a new user
        ID.unique(), // Unique user ID
        email,
        password,
        name
      );
      if (useAccount) {
        // calling another function for login
        return this.login({ email, password }); // Login the user after creating
      } else {
        return useAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password); // Create a session for the user
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get(); // Get the current user
    } catch (error) {
      if (error.code === 401) {
        console.warn("User not logged in.");
      } else {
        console.error("Unexpected error in getCurrentUser():", error);
      }
      return null;
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
      // Delete all sessions for the user
    } catch (error) {
      console.log("Appwrite service : : logout : : ", error);
    }
  }
}
const authservice = new AuthService();
export default authservice;
