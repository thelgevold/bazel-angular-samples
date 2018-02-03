import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {Survey} from './survey';
import {SurveyDemo} from './survey-demo';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: SurveyDemo}])
  ],
  declarations: [Survey, SurveyDemo]    
})
export class SurveyModule {}