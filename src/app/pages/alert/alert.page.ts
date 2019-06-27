import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { threadId } from "worker_threads";
@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"]
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: "Prompt!",
      inputs: [
        {
          name: "txtNombre",
          type: "text",
          placeholder: "titulo"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: (data) => {
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await alert.present();
  }
}
