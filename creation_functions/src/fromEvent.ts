import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  (event) => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);

const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
  const clickHandler = (event: MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandler);

  return () => {
    triggerButton.removeEventListener('click', clickHandler);
  };
});

const customSubscription = triggerClick$.subscribe((event) =>
  console.log(event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Unsubscribe');
  customSubscription.unsubscribe();
}, 5000);
