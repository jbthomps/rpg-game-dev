import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { delay } from 'rxjs/operators';

@Component({
    templateUrl: './notification-dialog.component.html',
    styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<NotificationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {
        dialogRef.afterOpen().pipe(delay(5000)).subscribe(() => dialogRef.close());
    }
}