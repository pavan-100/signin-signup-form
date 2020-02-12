import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";

@NgModule({
  imports: [FormsModule, MaterialModule],

  declarations: [],

  exports: [FormsModule, MaterialModule],

  providers: []
})
export class SharedModule {}
