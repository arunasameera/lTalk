import { FormControl } from '@angular/forms';

export function WordCountValidator(control: FormControl): { [key: string]: boolean } | null {
    let text = control.value;
    console.log('@@');
    if(text != null ){
      console.log(text);
      let wCount = text.split(' ').length;
      console.log('&&&&'+wCount);
      if (wCount > 3) {
        return  {invalidWC: true};
      }
    }
    return null;
}
