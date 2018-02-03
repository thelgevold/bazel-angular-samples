import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  exports: [CommonModule, RouterModule]
})
export class SharedModule {}