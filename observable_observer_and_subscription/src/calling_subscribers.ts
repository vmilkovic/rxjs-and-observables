import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  // setTimeout(() => {
  //   subscriber.next('Charlie');
  //   subscriber.complete();
  // }, 2000);

  // setTimeout(() => {
  //   subscriber.error(new Error('Failure'));
  // }, 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error.message),
  complete: () => console.log('Completed'),
});
console.log('After subscribe');
