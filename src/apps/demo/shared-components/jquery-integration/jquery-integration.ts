import {Component, ElementRef, Inject, OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'jquery-integration',
    template: `<h1>Integrating jQuery with Angular</h1>

    <div class="moving-box">
        Drag this box around
    </div>
    
    <h4><a href="http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0">Read more here</a></h4>`
})

export class JqueryIntegration implements OnInit {
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        jQuery(this.elementRef.nativeElement).find('.moving-box').draggable({containment:'#draggable-parent'});
    }
}