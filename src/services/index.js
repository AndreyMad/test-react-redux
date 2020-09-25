import axios from 'axios';

export const getUsers = () =>  axios.get('https://randomuser.me/api/?results=100');

export const setBudget = budget => axios.post("/budget", { budget: budget });
