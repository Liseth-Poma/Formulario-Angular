import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Router, RouterOutlet } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { FinalDatatableComponent } from './views/final-datatable/final-datatable.component';
import { VideojuegoFormComponent } from './components/videojuego-form/videojuego-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    Tabla1Component,
    FinalDatatableComponent, VideojuegoFormComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';

  
}
