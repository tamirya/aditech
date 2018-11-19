import { HomeComponent } from "./home.component";
import { CommonModule } from "node_modules/@angular/common";
import { NgModule } from '@angular/core';
import { MaterialModule } from "../modules/material.module";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";

@NgModule({
  imports: [
    FormsModule, 
    MaterialModule,
    CommonModule
  ],
  declarations: [
    FilterPipe,
    HomeComponent
  ],
})
export class HomeMoudle {}