import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'cif': new FormControl(null),
      'namaLengkap': new FormControl(null),
      'namaIdentitas': new FormControl(null),
      'jenisKelamin': new FormControl(null)
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }


}
