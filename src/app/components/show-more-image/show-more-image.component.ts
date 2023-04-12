import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-show-more-image',
  templateUrl: './show-more-image.component.html',
  styleUrls: ['./show-more-image.component.scss']
})
export class ShowMoreImageComponent {
  visible: boolean = true;

  constructor(
    public modalRef: MdbModalRef<ShowMoreImageComponent>,
    private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
}
