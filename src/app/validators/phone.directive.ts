import { Directive, 
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
 } from '@angular/core';

@Directive({
  selector: '[phoneNumber]',
  host: {
    '[value]': 'phoneNumber',
    '(input)': 'formatPhoneNumber($event.target.value)'
  },
  standalone: true
})
export class PhoneDirective {

  
  @Input() phoneNumber: string
  @Output() phoneNumberChange = new EventEmitter<string>();

  private editingAllowed: number[] = [
      8, // backspace
      37, // left arrow
      39, // right arrow
      46, // delete
  ]
  private allowed: number[] = [
      48, // 0
      49, // 1
      50, // 2
      51, // 3
      52, // 4
      53, // 5
      54, // 6
      55, // 7
      56, // 8
      57, // 9
      96, // 0 - keypad
      97, // 1 - keypad
      98, // 2 - keypad
      99, // 3 - keypad
      100, // 4 - keypad
      101, // 5 - keypad
      102, // 6 - keypad
      103, // 7 - keypad
      104, // 8 - keypad
      105, // 9 - keypad
  ];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // console.log(this.phoneNumber, this.phoneNumber.length)
    if (
        event.ctrlKey &&
        (event.keyCode == 86 || event.keyCode == 65 || event.keyCode == 88)
    ) {
        // allow pasting of content - the pasted content needs to get filtered in component this directive is used
        // allow select all
        // allow cut
        return;
    }

    if(this.editingAllowed.includes(event.keyCode) && !event.shiftKey) {
      return
    }

    if(this.phoneNumber.length > 11) {
      return event.preventDefault();
    }

    if (this.allowed.includes(event.keyCode) && !event.shiftKey) {
      return;
    } else {
      return event.preventDefault();
    }
  }

  formatPhoneNumber(value: string) {
    if(!value) {
      return this.phoneNumberChange.next('')
    }
    const origLength = value.length
    value = value.replace(/[^0-9]/g, '')
    value = value.slice(0, 10)
    let ret = ''
    for(let i = 0; i < value.length; ++i) {
      ret += value.charAt(i)
      if((ret.length == 3 && origLength > 3) || (ret.length == 7 && origLength > 7)) {
        ret += '-'
      }
    }
    value = ret
    this.phoneNumberChange.next(value)
  }
}
