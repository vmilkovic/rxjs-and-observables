import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event: MouseEvent) =>
  console.log('Sub 1:', event.type, event.x, event.y)
);

setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe((event: MouseEvent) =>
    console.log('Sub 2:', event.type, event.x, event.y)
  );
}, 5000);
