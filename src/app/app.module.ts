import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HeaderComponent } from './core/components/header/header.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [AppComponent,HeaderComponent, MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
