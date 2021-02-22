import { LightningElement,api ,track} from 'lwc';
import PROJECT__C_OBJECT from '@salesforce/schema/Project__c';

import OWNER__C_FIELD from '@salesforce/schema/Project__c.owner__c';
import STATUS__C_FIELD from '@salesforce/schema/Project__c.status__c';
import PROJECT_TYPE__C_FIELD from '@salesforce/schema/Project__c.project_type__c';
import END_DATE__C_FIELD from '@salesforce/schema/Project__c.end_date__c';
import PRIORITY__C_FIELD from '@salesforce/schema/Project__c.priority__C';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Project extends LightningElement {
  
  @api recordId;
  @api objectApiName;
  fields =[OWNER__C_FIELD,STATUS__C_FIELD,PROJECT_TYPE__C_FIELD,END_DATE__C_FIELD,PRIORITY__C_FIELD]
  @track customFormModal = false; 
    
  customShowModalPopup() {            
      this.customFormModal = true;
  }

  customHideModalPopup() {    
      
      this.customFormModal = false;
  }
  submitDetails(){
  this.template.querySelector('lightning-record-edit-form').submit();
    this.customFormModal = false;
    const evt = new ShowToastEvent({
      title: 'Successfully Saved',
    
      variant: 'success',
      mode: 'dismissable'
  });
  this.dispatchEvent(evt);
  }
  
saveAndNewClick() {
  this.redirect = false;
  this.template.querySelector('lightning-record-edit-form').submit();
  this.resetpage = true;
  this.handleReset();
}

handleReset(event) {
 // Might be possible to use this.fields instead of a selector
 
 const inputFields = this.template.querySelectorAll('lightning-input-field');
 if (inputFields) {
     inputFields.forEach(field => {
         field.reset();
     });
 }
}

get acceptedFormats() {
  return ['.pdf', '.png'];
}

handleUploadFinished(event) {
  
  const uploadedFiles = event.detail.files;
}
  formats = ['font', 'size', 'bold', 'italic', 'underline',
        'strike', 'list', 'indent', 'align', 'link',
        'image', 'clean', 'table', 'header'];

}
