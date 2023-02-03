import { Component } from '../../lib/core/component';
import { On } from '../../lib/core/decorators'
import template from './foo.template.html'; 

@Component({
  selector: `ag-foo-component`,
  template,
})
export class FooComponent {

  name: string = 'Barry Bannelope';

  count: number = 1

  @On('#add-button', 'click')
  showAlert(){
    this.count += 1
  }
  
}
