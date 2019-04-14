import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  passedId = null;

  ngOnInit() {
    this.passedId = this.navParams.get("custom_id");
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
