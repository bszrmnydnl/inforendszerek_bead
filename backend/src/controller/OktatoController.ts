import { Oktato } from '../entity/Oktato';
import {getRepository, Repository} from 'typeorm';
import {Controller} from './Controller';


export class OktatoController extends Controller {
  repository = getRepository(Oktato);

}
