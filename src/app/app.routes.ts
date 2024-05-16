import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WereableComponent } from './wereable/wereable.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

    { path: 'token/welcome', component: WelcomeComponent, title: 'Welcome Page'},  
    { path :'wereable',  component: WereableComponent, title :'Wereable'},
    { path : 'token', component: FormComponent, title: 'token'},
    {path: '**', component: PageNotFoundComponent}

];
