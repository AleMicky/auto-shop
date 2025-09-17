import { Routes } from '@angular/router';
import { AlbumPage } from './pages/album-page/album-page';

export const routes: Routes = [
    {
        path: 'album',
        component: AlbumPage, 
        title: 'Album'
    },
    { path: '', redirectTo: 'album', pathMatch: 'full' }
];
