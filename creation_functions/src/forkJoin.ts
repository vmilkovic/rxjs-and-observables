import { forkJoin, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response['first_name']} is from ${nationAjax.response['capital']} and lites to eat ${foodAjax.response['dish']}`
    )
);

const a$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 5000);

  return () => {
    console.log('A teardown');
  };
});

const b$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 3000);

  return () => {
    console.log('B teardown');
  };
});

forkJoin([a$, b$]).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
});
