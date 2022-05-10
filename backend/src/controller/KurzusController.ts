import { Kurzus } from '../entity/Kurzus';
import {getRepository, Repository} from 'typeorm';
import {Controller} from './Controller';
import {Request, Response} from 'express';


export class KurzusController extends Controller {
  repository = getRepository(Kurzus);

  getAll = async (req: Request, res: Response) => {
    try {
      const entities = await this.repository.query(' SELECT `Kurzus`.`kurzusKod` AS `kurzusKod`, `Kurzus`.`nev` AS `nev`, `Kurzus`.`tantargyTargyKod` AS `tantargy` FROM `kurzus` `Kurzus`');
      res.json(entities);
    } catch (err) {
      console.error(err);
      this.handleError(res);
    }
  }
}
