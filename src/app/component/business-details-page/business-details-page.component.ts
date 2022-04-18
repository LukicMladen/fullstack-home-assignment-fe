import { Component } from '@angular/core';
import { BusinessEntryService } from '../../service/business-entry.service';
import { BusinessEntry, Day, WorkingHours } from '../../model/models';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-details-page',
  templateUrl: './business-details-page.component.html',
  styleUrls: ['./business-details-page.component.scss'],
})
export class BusinessDetailsPageComponent {
  businessEntry$: Observable<BusinessEntry>;
  businessId: string;

  constructor(protected businessEntryService: BusinessEntryService, private route: ActivatedRoute) {
    this.businessId = this.route.snapshot.params['id'];
    this.businessEntry$ = this.businessEntryService.getBusinessEntryById(this.businessId).pipe(
      map((businessEntry) => {
        let updatedListOfDays: Day[] = [];
        businessEntry.openingHours.listOfDays.forEach((day) => {
          if (
            updatedListOfDays.length > 0 &&
            this.checkSameWorkingHours(updatedListOfDays[updatedListOfDays.length - 1].workingHours, day.workingHours)
          ) {
            updatedListOfDays[updatedListOfDays.length - 1].name =
              updatedListOfDays[updatedListOfDays.length - 1].name.split('-')[0].trim() + ' - ' + day.name;
          } else {
            updatedListOfDays.push(day);
          }
        });
        businessEntry.openingHours.listOfDays = updatedListOfDays;
        return businessEntry;
      })
    );
  }

  private checkSameWorkingHours(workingHours: WorkingHours[], workingHours2: WorkingHours[]) {
    if (workingHours === workingHours2) return true;
    if (!workingHours || !workingHours2) return false;
    if (workingHours.length !== workingHours2.length) return false;
    for (let i = 0; i < workingHours.length; i++) {
      if (workingHours[i].start !== workingHours2[i].start || workingHours[i].end !== workingHours2[i].end) {
        return false;
      }
    }
    return true;
  }
}
