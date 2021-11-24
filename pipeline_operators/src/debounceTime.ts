import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(2000),
    map((event) => event.target['value'])
  )
  .subscribe((value) => console.log(value));
