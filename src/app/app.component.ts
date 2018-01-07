import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'cif': new FormControl(null, Validators.required),
      'namaLengkap': new FormControl(null, [Validators.required, Validators.min(5)]),
      'namaIdentitas': new FormControl(null, [Validators.required, Validators.min(5)]),
      'jenisKelamin': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }


}
