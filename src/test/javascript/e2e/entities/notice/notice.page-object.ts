import { element, by, ElementFinder } from 'protractor';

export class NoticeComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-notice div table .btn-danger'));
  title = element.all(by.css('jhi-notice div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class NoticeUpdatePage {
  pageTitle = element(by.id('jhi-notice-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  titleInput = element(by.id('field_title'));
  descriptionInput = element(by.id('field_description'));

  noticeListSelect = element(by.id('field_noticeList'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTitleInput(title: string): Promise<void> {
    await this.titleInput.sendKeys(title);
  }

  async getTitleInput(): Promise<string> {
    return await this.titleInput.getAttribute('value');
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async noticeListSelectLastOption(): Promise<void> {
    await this.noticeListSelect.all(by.tagName('option')).last().click();
  }

  async noticeListSelectOption(option: string): Promise<void> {
    await this.noticeListSelect.sendKeys(option);
  }

  getNoticeListSelect(): ElementFinder {
    return this.noticeListSelect;
  }

  async getNoticeListSelectedOption(): Promise<string> {
    return await this.noticeListSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class NoticeDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-notice-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-notice'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
