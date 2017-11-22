/**
 * Created by chimy on 2017/11/22.
 */


export class Demo {
  constructor(public name: string, public state = 'inactive') {

  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
