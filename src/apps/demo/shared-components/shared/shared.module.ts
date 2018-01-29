import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, HttpModule, CommonModule, RouterModule]
})
export class SharedModule {}