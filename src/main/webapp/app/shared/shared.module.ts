import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddruceSharedLibsModule, AddruceSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AddruceSharedLibsModule, AddruceSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [AddruceSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddruceSharedModule {
  static forRoot() {
    return {
      ngModule: AddruceSharedModule
    };
  }
}
