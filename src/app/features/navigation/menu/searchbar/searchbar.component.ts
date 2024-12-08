import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: false,
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  inputValue: string = "";
  croix: boolean = false;

  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log('Input value:', this.inputValue);
    this.checkInputValue(this.inputValue)
  }

  checkInputValue(inputValue: string){
    if(inputValue != ""){
      this.croix = true;
    }else {
      this.croix = false;
    }
  }

}
