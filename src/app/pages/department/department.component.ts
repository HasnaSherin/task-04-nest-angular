import { Component } from '@angular/core';
import { CardComponent } from "../../units/card/card.component";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
