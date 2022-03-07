import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({ 
      selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
    })
export class ContactComponent implements OnInit {
  contact!: Contact;
  contactForm!: FormGroup;
    loading = false;
    submitted = false;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private ConnectionService: ConnectionService
    ) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            nom: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            msg: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }
 
    onSubmit() 
    {
      this.submitted = true;
      if (this.contactForm.invalid) {
          return;
      }
      this.loading = true;
      this.ConnectionService.contact(this.contactForm.value).subscribe(() => {
        alert('Votre message a été envoyé.');
        this.contactForm.reset();
        this.submitted = true;
      }, error => {
        console.log('Erreur', error);
      });
    }


}