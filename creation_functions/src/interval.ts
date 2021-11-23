import { Observable, interval } from 'rxjs';

console.log('App started');

const subscription = interval(1000).subscribe({
  next: (value) => console.log('Inteval: ', value),
  complete: () => console.log('Completed!'),
});

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;

  const intervalId = setInterval(() => {
    console.log('Custom Interval!');
    subscriber.next(counter++);
  }, 1000);

  return () => clearInterval(intervalId);
});

const customSubscription = interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!!'),
});

setTimeout(() => {
  customSubscription.unsubscribe();
  console.log('Unsubscribe');
}, 5000);
