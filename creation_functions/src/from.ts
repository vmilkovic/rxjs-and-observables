import { from } from 'rxjs';

from(['Alice', 'Ben', 'Charlie']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

const resolvedPromise = new Promise((resolve, reject) => {
  resolve('Resolved!');
});

const rejectedPromise = new Promise((resolve, reject) => {
  reject('Rejected!');
});

const obeservableFromResolved$ = from(resolvedPromise);
const obeservableFromRejected$ = from(rejectedPromise);

obeservableFromResolved$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
  complete: () => console.log('Completed'),
});

obeservableFromRejected$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
  complete: () => console.log('Completed'),
});
