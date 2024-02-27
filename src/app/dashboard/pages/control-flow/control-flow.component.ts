import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type grade = 'A'|'B'|'F'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<grade>('A')
  public frameworks = signal(['Angular','Vue','Svelt','Qwik','React'])
  public frameworks2 = signal([])

  public toggleContent (){
    this.showContent.update(value => !value )
  }

}
