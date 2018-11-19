import { CommonModule } from "node_modules/@angular/common";
import { NgModule } from '@angular/core';
import { MaterialModule } from "../modules/material.module";
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "./details.component";


@NgModule({
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    DetailsComponent
  ],
})
export class DetailsMoudle {}