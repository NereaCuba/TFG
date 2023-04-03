import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-show-more-image',
  templateUrl: './show-more-image.component.html',
  styleUrls: ['./show-more-image.component.scss']
})
export class ShowMoreImageComponent {

  constructor(public modalRef: MdbModalRef<ShowMoreImageComponent>) {}

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
}
