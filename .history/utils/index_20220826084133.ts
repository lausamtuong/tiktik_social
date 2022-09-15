import axios from 'axios';
import jwt from 'jwt-decode'

export const createOrGetUser = async (response: any, addUser: any) => {
  const decode:{name:string,picture:string,sub:string} = jwt(response.credential)
 const {name,picture,sub} = decode;
 const user

  

};