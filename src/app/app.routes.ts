import { Routes } from '@angular/router';
import { DailyRecommendationsComponent } from './daily-recommendations/daily-recommendations.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: ProfileComponent},
    { path: 'dailyRecommendations', component: DailyRecommendationsComponent },
    { path: 'profileDetails', component: ProfileDetailsComponent }
];
