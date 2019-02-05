import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ViewComponent } from './topic/view/view.component';
import { SubmitComponent } from './topic/submit/submit.component';
import { AuthGuard} from './auth-guard.service';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch : 'full'},
{path: 'login', component: LoginComponent},
{path: 'view', component: ViewComponent},//, canActivate: [AuthGuard]
{path: 'submit', component: SubmitComponent},//, canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
