import{drogueriaService}from'../../services/drogueria-service';
import{resFail,resSucces}from'../common/response-body';
import{Request,Response}from'express';
import{Drogueria} from '../../services/common/drogueria'

export class LocationQuery {
    lat: number;
    lon: number;
    km: number;
    constructor(query: any) {
        this.lat = query.lat ? parseFloat(query.lat) : 0;
        this.lon = query.lon ? parseFloat(query.lon) : 0;
        this.km = query.km ? parseInt(query.km) : 5;
    }
}

export function allLocation(req: Request, res: Response, next) {
    let query: LocationQuery = new LocationQuery(req.query);
    drogueriaService
        .allByLocation(query.lon, query.lat, query.km)
        .then(result => resSucces<Drogueria[]>(res, result))
        .catch(err => resFail(res, 500, err));
}