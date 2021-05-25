
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Banda } from 'src/app/models/band';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-info-detallada',
  templateUrl: './info-detallada.component.html',
  styleUrls: ['./info-detallada.component.css']
})
export class InfoDetalladaComponent implements OnInit {

  public showForm : boolean;

  public miCancion: string;

  constructor(private bandService: BandsService, private _router: Router, private _sanitizer: DomSanitizer) 
  { 
    this.showForm = false;

    this.miCancion = "";
  }

  showBand()
  {
    this.bandService.getBand(this.bandService.id_band).subscribe((resultado:any)=>
    {
      this.bandService.newBand = resultado;

      console.log(this.bandService.newBand);
    })

  }

  deleteBand(_id:string)
  {
    if(confirm("¿Seguro que quieres borrar este grupo?"))
    {
      this.bandService.deleteBand(_id).subscribe(
        (res)=>{console.log(res)

        },
        (err)=>console.log(err))
      
      this._router.navigate(['']);
    }
  }

  editBand(form: NgForm)
  {
    this.bandService.updateBand(this.bandService.id_band, form.value).subscribe((resultado:any)=>
    {
      this.bandService.newBand = resultado;
      console.log(resultado);
    });
    
    this.hide();
  }

  show()
  {
    this.showForm = true;   
  } 
  hide()
  { 
    this.showForm = false;
  }


  ngOnInit(): void 
  {
    this.showBand();

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api/';
    document.body.appendChild(tag);
      
  }

}
