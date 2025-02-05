import { Routes } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { HomeComponent } from '../../components/home/home.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { GallaryComponent } from '../../components/gallary/gallary.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WebComponent } from '../../components/servicesfolder/web/web.component';
import { MobileComponent } from '../../components/servicesfolder/mobile/mobile.component';
import { TestandmainComponent } from '../../components/servicesfolder/testandmain/testandmain.component';
import { ConsultantComponent } from '../../components/servicesfolder/consultant/consultant.component';
import { CursorEffectComponent } from '../../components/cursor-effect/cursor-effect.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'services', component: ServicesComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'gallery', component: GallaryComponent},
    {path:'footer', component: FooterComponent},
    {path:'web', component: WebComponent},
    {path:'mobile', component: MobileComponent},
    {path:'test&main', component: TestandmainComponent},
    {path:'consultantser', component: ConsultantComponent},
    {path:'cursor', component: CursorEffectComponent},
];
