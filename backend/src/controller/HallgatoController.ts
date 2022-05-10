import { Hallgato } from '../entity/Hallgato';
import {getRepository, Repository} from 'typeorm';
import {Controller} from './Controller';

export class HallgatoController extends Controller {
  repository = getRepository(Hallgato);
}
