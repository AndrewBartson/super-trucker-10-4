import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
declare var google: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  enableMainArea = true;

  ngOnInit() {}

}
