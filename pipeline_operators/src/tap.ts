import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

of(1, 7, 3, 6, 2)
  .pipe(
    tap((value) => console.log('Current map value:', value)),
    filter((value) => value > 5),
    tap({
      next: (value) => console.log('Current filter value:', value),
      error: (err) => console.log(err),
      complete: () => console.log('Completed!'),
      subscribe: () => {
        console.log('New Subscription');
      },
      unsubscribe: () => {
        console.log('Unsubscribed');
      },
      finalize: () => {
        console.log('Subscription ended');
      },
    }),
    map((value) => value * 2)
  )
  .subscribe((value) => console.log('Output:', value));
