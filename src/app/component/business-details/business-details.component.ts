import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BusinessEntry } from '../../model/models';
import { BusinessEntryService } from '../../service/business-entry.service';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {
  @Input()
  businessId: string;

  businessEntry$: Observable<BusinessEntry>;

  constructor(protected businessEntryService: BusinessEntryService) {}

  ngOnInit(): void {
    this.businessEntry$ = this.businessEntryService.getBusinessEntryById(this.businessId);
  }
}
