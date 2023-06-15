import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';

const APP_ROUTES: Routes = [
    { path: '', component: CalendarComponent},

];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
