import { Tantargy } from '../entity/Tantargy';
import {getRepository, Repository} from 'typeorm';
import {Controller} from './Controller';

export class TantargyController extends Controller {
  repository = getRepository(Tantargy);

}
