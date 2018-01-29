import {Component, Input} from '@angular/core';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    template: `
    <ul>
    <li *ngFor="let dir of directories">

        <span class="iconButton" (click)="dir.toggle()">{{dir.getIcon()}}</span><input type="checkbox" [checked]="dir.checked" (click)="dir.check()" /> {{ dir.name }}

        <div *ngIf="dir.expanded">

            <ul>
                <li *ngFor="let file of dir.files">{{file}}</li>
            </ul>

            <tree-view [directories]="dir.directories"></tree-view>

        </div>

    </li>
    </ul>
    `
})

export class TreeView {
    @Input() directories: Array<Directory>;
}