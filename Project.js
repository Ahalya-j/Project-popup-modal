import { LightningElement,api } from 'lwc';
import PROJECT__C_OBJECT from '@salesforce/schema/Project__c';

import OWNER__C_FIELD from '@salesforce/schema/Project__c.owner__c';
import STATUS__C_FIELD from '@salesforce/schema/Project__c.status__c';
import PROJECT_TYPE__C_FIELD from '@salesforce/schema/Project__c.project_type__c';
import END_DATE__C_FIELD from '@salesforce/schema/Project__c.end_date__c';
import PRIORITY__C_FIELD from '@salesforce/schema/Project__c.priority__C';
export default class Project extends LightningElement {
  
  @api recordId;
  fields =[OWNER__C_FIELD,STATUS__C_FIELD,PROJECT_TYPE__C_FIELD,END_DATE__C_FIELD,PRIORITY__C_FIELD]
  modalPopUpToggleFlag = false;

    handlePopup(){
        this.modalPopUpToggleFlag = true;
    }

    handleSkip(){
        this.modalPopUpToggleFlag = false;
    }

       
  get acceptedFormats() {
    return ['.pdf', '.png'];
}

handleUploadFinished(event) {
    // Get the list of uploaded files
    const uploadedFiles = event.detail.files;
}

allowedFormats =  ['font', 'size', 'bold', 'italic', 'underline', 'strike','Bulleted List','Numbered List',
'indent','Outdent','Add Emoji', 'align', 'link', 'image', 'clean', 'table', 'header',
'background','code','code-block'];

//this method will display initial text
get myVal() {
   return ;
}

attachment;

handleClick() {
   const editor  = this.template.querySelector('lightning-input-rich-text');
   const textToInsert = 'Journey to Salesforce'
   editor.setRangeText(textToInsert, undefined, undefined, 'select')
   editor.setFormat({bold: true, size:24, color: 'green', align: 'center',});
}

}
