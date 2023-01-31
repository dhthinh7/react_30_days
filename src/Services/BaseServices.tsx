import Axios from 'axios'
import { DOMAIN } from '../util/constant'
export class BaseServices {
  get = (url:string, type: string) => Axios({
    method: "GET",
    url: `${DOMAIN}/${type}/${url}`
  })
}
