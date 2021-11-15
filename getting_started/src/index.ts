import { name$, storeDataOnServer, storeDataOnServerError } from './external';

name$.subscribe((value) => console.log(value));

storeDataOnServer('Some value').subscribe((value) => console.log(value));

storeDataOnServerError('Some error').subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error when saving:', err.message),
});
