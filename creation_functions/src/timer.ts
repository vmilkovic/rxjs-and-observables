import { timer, Observable } from 'rxjs';

console.log('App started');

const subscription = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log('Timeout!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const customSubscription = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!!'),
});

setTimeout(() => {
  subscription.unsubscribe();
  customSubscription.unsubscribe();
  console.log('Unsubscribe');
}, 1000);
