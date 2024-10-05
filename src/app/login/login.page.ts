import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private loadingController: LoadingController) {}

  async onLogin() {
    // Verifique as credenciais
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      // Exibir o spinner de carregamento
      const loading = await this.loadingController.create({
        message: 'Logging in...',
        duration: 2000  // Tempo de simulação do carregamento em milissegundos (2 segundos)
      });
      await loading.present();

      // Após o carregamento, redirecionar para as Tabs ou Home
      loading.onDidDismiss().then(() => {
        this.navCtrl.navigateForward('/tabs');
      });
    } else {
      // Se as credenciais estiverem incorretas, exibir uma mensagem de erro
      alert('Invalid credentials');
    }
  }
}
