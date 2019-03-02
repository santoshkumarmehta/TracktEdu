import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';

import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { TestComponent } from './test.component';

@Injectable({
  providedIn: 'root'
})
export class Test1serviceService {
  private TestPortal:ComponentPortal<TestComponent>;
  private bodyPortalHost: DomPortalHost;
  constructor(private componentFactoryResolver:ComponentFactoryResolver,
    private appRef:ApplicationRef,
    private injector:Injector)
    { 
    //  create a portal based on testPortal
    this.TestPortal = new ComponentPortal(TestComponent)
    // Create a portalHost as document.body as its anchor elements
    this.bodyPortalHost= new DomPortalHost(
      document.body,this.componentFactoryResolver,this.appRef,this.injector
    );

   }
   reveal(){
     //Attach the portal to the portal host
     this.bodyPortalHost.attach(this.TestPortal)
   }
   hide(){
     //detach the portal to the portal host
     this.bodyPortalHost.detach();
   }

}
