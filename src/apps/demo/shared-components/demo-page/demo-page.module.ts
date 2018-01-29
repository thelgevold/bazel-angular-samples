import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {DemoPage} from './demo-page';

@NgModule({
  imports: [SharedModule],
  declarations: [DemoPage],
  exports: [DemoPage]    
})
export class DemoPageModule {}