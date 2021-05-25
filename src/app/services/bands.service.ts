import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Banda } from '../models/band';


@Injectable({
  providedIn: 'root'
})
export class BandsService {

  public url = "http://localhost:3000";

  public bands: Banda[];

  public newBand: Banda =
  {
    photo: "",
    name: "",
    foundation: 0,
    styles: "",
    members: "",
    song: "",
  }

  public id_band:string = "";
  
  constructor(private http: HttpClient) 
  { 
    this.bands = []
  }

  getBands()
  {
    return this.http.get(this.url + "/bands");
  }

  getBand(_id:string)
  {
    return this.http.get(this.url + "/band/" + _id)
  }

  addBand(band:Banda)
  {
    return this.http.post(this.url + "/band", band);
  }

  updateBand(_id: string, band:Banda)
  {
    return this.http.put(this.url + "/band/" + _id, band);
  }

  deleteBand(_id:string)
  {
    return this.http.delete(this.url + "/band/" + _id);
  }

}
