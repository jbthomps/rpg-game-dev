import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NotificationDialogComponent } from '../turn-engine/notification-dialog.component';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MessageLogService {
    messageEmitter: Subject<string> = new Subject<string>();
    private lastEmit: number;

    constructor(private dialog: MatDialog) {
        this.messageEmitter.subscribe(value => {
            if (!this.lastEmit || Date.now() - this.lastEmit > 1000) {
                this.logMessages(value)
                this.lastEmit = Date.now();
            } else {
                setTimeout(() => {
                    this.logMessages(value);
                    this.lastEmit = Date.now();
                }, Math.max(1000 - (Date.now() - this.lastEmit)))
            }
        })
    }

    private logMessages(msg) {
        this.dialog.open(NotificationDialogComponent, {
            data: { message: msg }
        })
    }
}