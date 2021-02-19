import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
class Person {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public partyType: string = '',
              public displayName: string = '',
              public middleName: string = '',
              public birthDate: string = '',
              public taxId: string = '',
              public generationSuffixCd: string = '') {
  }
}

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  model: Person = new Person();
  original: Person = new Person();
  @ViewChild('f', { static: true }) form: any;
  closeResult = '';
  finalFormValue = {};
  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  
  open(content) {
    if (this.form.valid) {
      let ngbDate = this.form.controls['birthDate'].value;
      let myDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      this.finalFormValue = {
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        displayName: this.model.displayName,
        middleName: this.model.middleName,
        birthDate: myDate,
        generationSuffixCd: this.model.generationSuffixCd,
        partyType: this.model.partyType,
        taxId: this.model.taxId,
        original : {
          firstName: this.original.firstName ? this.original.firstName : null,
          lastName: this.original.lastName ? this.original.lastName : null,
          displayName: this.original.displayName ? this.original.displayName : null,
          middleName: this.original.middleName ? this.original.middleName : null,
          birthDate: this.original.birthDate ? this.original.birthDate : null,
          generationSuffixCd: this.original.generationSuffixCd ? this.original.generationSuffixCd : null,
          partyType: this.original.partyType ? this.original.partyType : null,
          taxId: this.original.taxId ? this.original.taxId : null,
        },
      }
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.form.reset();
    }, (reason) => {
      this.form.reset();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
