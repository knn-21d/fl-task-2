import {
  Component,
  AfterViewInit,
  input,
  afterNextRender,
  effect,
  inject,
  Injector,
  signal,
  viewChild,
  ElementRef,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import mermaid from 'mermaid';
import { debounceTime, tap, timeout } from 'rxjs';
import { uuidv4 } from '../../utils/string';

@Component({
  selector: 'app-treant',
  templateUrl: './treant.component.html',
  styleUrl: './treant.component.css',
})
export class TreantComponent {
  private readonly injector = inject(Injector);

  public data = input<string>();

  protected readonly test = viewChild.required('test', {
    read: ElementRef<HTMLPreElement>,
  });

  protected readonly id = 'id-' + uuidv4();

  constructor() {
    toObservable(this.data)
      .pipe(
        tap(async (data) => {
          if (data) {
            (this.test().nativeElement as HTMLPreElement).removeAttribute(
              'data-processed',
            );
            (this.test().nativeElement as HTMLPreElement).innerHTML = data;
            afterNextRender(
              {
                read: async () => {
                  await mermaid.init(undefined, `#${this.id}`);
                },
              },
              { injector: this.injector },
            );
          }
        }),
      )
      .subscribe();
  }
}
