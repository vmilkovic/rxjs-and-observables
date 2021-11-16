import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

const observer = {
  next: (value) => console.log(value),
};
observable$.subscribe(observer);

const subscription = observable$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
