import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Banda } from 'src/app/models/band';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  public showForm : boolean;
  public miCancion: string;

  public searchText: String;
  public arrayBandas : Banda[] = [this.bandService.newBand];

  constructor(private bandService: BandsService, private _router: Router) 
  { 
    this.showForm= false;
    this.searchText = "";
    this.miCancion = "";
  }

  goBand(id:string)
  {
    
    this.bandService.id_band = id;

    console.log(this.bandService.id_band);

    this._router.navigate(['info-detallada'])
    
  }
  
  getBands()
  {
    this.bandService.getBands().subscribe((resultado:any)=>
    {
      this.bandService.bands = resultado;
      this.arrayBandas = resultado;
      console.log(this.bandService.bands);
    })
  }

  addBand(form:NgForm)
  { 
    // this.miCancion = form.value.song.slice(32,0)
    // console.log(this.miCancion)
    this.bandService.addBand(form.value).subscribe((resultado:any)=>
    {
      console.log(resultado);
      this.getBands();
      this.hide();
    })
    
  }

  filter()
  {
    console.log("Respuesta: " + this.searchText);

    if (this.searchText=="")
    {
      this.bandService.bands = this.arrayBandas;
    }
    else
    {
      this.bandService.bands = this.arrayBandas.filter(newArray =>
        newArray.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
        newArray.foundation == Number(this.searchText)
      )
    }
  }
  show()
  {
    this.showForm = true;   
  } 
  hide()
  { 
    this.showForm = false;
  }

  ngOnInit(): void {

    this.getBands();

  }

}
