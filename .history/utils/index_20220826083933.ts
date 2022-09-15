import axios from 'axios';
import jwt from 'jwt-decode'

export const createOrGetUser = async (response: any, addUser: any) => {
  const decode:{name:string,picture} = jwt(response.credential)

  

};