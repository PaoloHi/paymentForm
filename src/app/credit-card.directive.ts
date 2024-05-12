import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]',
  standalone: true
})
export class CreditCardDirective {

  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let val = input.value?.toUpperCase();
    let trimmed = val.replace(/[^0-9]+/g, '');
    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(' ');

  }
}