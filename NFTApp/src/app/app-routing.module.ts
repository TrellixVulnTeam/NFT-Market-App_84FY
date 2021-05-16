
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {MyNftsComponent} from './my-nfts/my-nfts.component';
import {AddNftComponent} from './add-nft/add-nft.component';


const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: 'home', component: DummyComponent },
  // { path: 'services', component: DummyComponent },
  { path: 'nfts/add', component: AddNftComponent },
  { path: 'nfts', component: MyNftsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
