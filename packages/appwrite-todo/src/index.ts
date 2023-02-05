import { Client, Account, ID } from 'appwrite';

export enum Priority {
  LOW,
  MEDIUM,
  HIGH,
}

const client = new Client().setEndpoint('https://aw.kvodesupply.com/v1').setProject('todo');
