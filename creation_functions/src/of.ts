import { of, Observable } from 'rxjs';

of('Alice', 'Ben', 'Charlien').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

const names$ = new Observable<string>((subsriber) => {
  subsriber.next('Alice');
  subsriber.next('Ben');
  subsriber.next('Charlie');
  subsriber.complete();
});

names$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Complete'),
});

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}

ourOwnOf('Alice', 'Ben', 'Charlien').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
