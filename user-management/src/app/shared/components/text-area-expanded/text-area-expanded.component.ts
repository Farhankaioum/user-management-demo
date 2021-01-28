import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textarea-expanded',
  template: '',
  styles: [`
    div {
      width: 200px;
      min-height: 50px;
      border: 1px solid lightgray;
    }
    div.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  `]
})

export class TextAreaExpandedComponent implements ControlValueAccessor  {
  @ViewChild('textarea') textarea;

  onChange;
  onTouched;

  constructor( private renderer : Renderer2 ) {}

  writeValue( value : any ) : void {
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  change( $event ) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }
}
