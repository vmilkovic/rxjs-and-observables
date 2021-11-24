import { filter, Observable } from 'rxjs';
interface NewsItem {
  category: 'Buisness' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subsciber) => {
  setTimeout(
    () =>
      subsciber.next({
        category: 'Buisness',
        content: 'A',
      }),
    1000
  );
  setTimeout(
    () =>
      subsciber.next({
        category: 'Sports',
        content: 'B',
      }),
    3000
  );
  setTimeout(
    () =>
      subsciber.next({
        category: 'Buisness',
        content: 'C',
      }),
    4000
  );
  setTimeout(
    () =>
      subsciber.next({
        category: 'Sports',
        content: 'D',
      }),
    6000
  );
  setTimeout(
    () =>
      subsciber.next({
        category: 'Buisness',
        content: 'E',
      }),
    7000
  );
});

const sportsNewsFeed$ = newsFeed$.pipe(
  filter((item) => item.category === 'Sports')
);

sportsNewsFeed$.subscribe((item) => console.log(item));
