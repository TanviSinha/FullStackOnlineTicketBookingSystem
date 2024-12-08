
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Update if needed
import { provideHttpClient } from '@angular/common/http';  // Correct HttpClientModule import

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),         // Add routing
    provideHttpClient(),           // Provide HttpClient here
  ],
};
