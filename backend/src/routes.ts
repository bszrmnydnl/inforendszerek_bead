import { Router } from 'express';
import {HallgatoController} from './controller/HallgatoController';
import {KurzusController} from './controller/KurzusController';
import {OktatoController} from './controller/OktatoController';
import {TantargyController} from './controller/TantargyController';

export function getRouter(): Router {
    const router = Router();

    const hallgato = new HallgatoController();
    const kurzus = new KurzusController();
    const oktato = new OktatoController();
    const tantargy = new TantargyController();

    router.get('/hallgato', hallgato.getAll);
    router.get('/hallgato/:id', hallgato.getOne);
    router.post('/hallgato', hallgato.create);
    router.put('/hallgato', hallgato.update);
    router.delete('/hallgato/:id', hallgato.delete);

    router.get('/kurzus', kurzus.getAll);
    router.get('/kurzus/:id', kurzus.getOne);
    router.post('/kurzus', kurzus.create);
    router.put('/kurzus', kurzus.update);
    router.delete('/kurzus/:id', kurzus.delete);

    router.get('/oktato', oktato.getAll);
    router.get('/oktato/:id', oktato.getOne);
    router.post('/oktato', oktato.create);
    router.put('/oktato', oktato.update);
    router.delete('/oktato/:id', oktato.delete);

    router.get('/tantargy', tantargy.getAll);
    router.get('/tantargy/:id', tantargy.getOne);
    router.post('/tantargy', tantargy.create);
    router.put('/tantargy', tantargy.update);
    router.delete('/tantargy/:id', tantargy.delete);

    return router;
}
