import { LightningElement ,api,wire,track} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import PROJECT_NAME__C_FIELD from '@salesforce/schema/Account.project_name__c';
import END_DATE__C_FIELD from '@salesforce/schema/Account.end_date__c';
import PROJECT_TYPE__C_FIELD from '@salesforce/schema/Account.project_type__c';
import OWNER__C_FIELD from '@salesforce/schema/Account.owner__c';
import STATUS__C_FIELD from '@salesforce/schema/Account.status__c';
import PRIORITY__C_FIELD from '@salesforce/schema/Account.priority__c';
export default class Description extends LightningElement {
  
    value ='';
    @api recordId;

    handlePopup(){
        this.modalPopUpToggleFlag = true;
    }

    handleSkip(){
        this.modalPopUpToggleFlag = false;
    }



    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })

    accountMetadata;

@wire(getPicklistValues,
{
     recordTypeId: '$accountMetadata.data.defaultRecordTypeId', 

    fieldApiName: PROJECT_TYPE__C_FIELD

        }

    )
    projecttypePicklist;

    // on select picklist value to show the selected value
    handleChange1(event) {

        this.value = event.detail.value;

    }

    @wire(getPicklistValues,

        {

            recordTypeId: '$accountMetadata.data.defaultRecordTypeId', 

            fieldApiName: OWNER__C_FIELD

        }

    )
    ownerPicklist;

    handleChange2(event) {

        this.value = event.detail.value;

    }

    
    @wire(getPicklistValues,

        {

            recordTypeId: '$accountMetadata.data.defaultRecordTypeId', 

            fieldApiName: STATUS__C_FIELD

        }

    )
    statusPicklist;

    
    handleChange3(event) {

        this.value = event.detail.value;

    }

    @wire(getPicklistValues,

        {

            recordTypeId: '$accountMetadata.data.defaultRecordTypeId', 

            fieldApiName: PRIORITY__C_FIELD

        }

    )
    priorityPicklist;

    
    handleChange4(event) {

        this.value = event.detail.value;

    }

    modalPopUpToggleFlag = false;
  
      handlePopup(){
          this.modalPopUpToggleFlag = true;
      }
  
      handleSkip(){
          this.modalPopUpToggleFlag = false;
      }
      customHideModalPopup(){
        this.modalPopUpToggleFlag = false;
      }
   

  @track customFormModal = false; 
 
    
  customShowModalPopup() {            
      this.customFormModal = true;
  }

  customHideModalPopup() {    
      
      this.customFormModal = false;
  }


    
  get acceptedFormats() {
    return ['.pdf', '.png'];
}

handleUploadFinished(event) {
    
    const uploadedFiles = event.detail.files;
}

allowedFormats =  ['font', 'size', 'bold', 'italic', 'underline', 'strike','Bulleted List','Numbered List',
'indent','Outdent','Add Emoji', 'align', 'link', 'image', 'clean', 'table', 'header',
'background','code','code-block'];


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
