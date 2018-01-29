import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {Spreadsheet} from './spreadsheet';

@NgModule({
  imports: [SharedModule],
  declarations: [Spreadsheet],
  exports: [Spreadsheet]
})
export class SpreadsheetModule {}