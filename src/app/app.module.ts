// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// App Modules
import { AppRoutingModule } from './app.routing.module';
import { AppMaterialModule } from './app.material.module';

// Containers
import * as fromContainers from './containers';

// Services
import * as fromServices from './services';

// Components
import * as fromComponents from './components';

@NgModule({
    declarations: [
        // Containers
        ...fromContainers.containers,
        //Components
        ...fromComponents.components,
    ],
    imports: [
        // Angular Modules
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        // App Modules
        AppRoutingModule,
        AppMaterialModule,
    ],
    providers: [
        // Services
        ...fromServices.services,
    ],
    bootstrap: [fromContainers.AppComponent],
})
export class AppModule {}
