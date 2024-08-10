import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "Nitu Makeover | Home", path:'' , component: HeaderComponent},
    {title: "Nitu Makeover | Home", path:'home' , component: HeaderComponent},
    {title: "Nitu Makeover | About", path:'about' , component: AboutComponent},
    {title: "Nitu Makeover | Client", path:'clients' , component: ClientsComponent},
    {title: "Nitu Makeover | Pricing", path:'pricing' , component: PricingComponent},
    {title: "Nitu Makeover | Testimonials", path:'testimonials' , component: TestimonialsComponent},
    {title: "Nitu Makeover | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "Nitu Makeover | academy", path:'academy' , component: ServicesComponent},
    {title: "Nitu Makeover | Not Found", path:'**' , component: NotfoundComponent},

];
