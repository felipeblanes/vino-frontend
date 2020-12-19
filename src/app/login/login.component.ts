import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArmazenamentoService } from '../armazenamento.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: any;
  mensagemErro = false;
  mensagem = "";

  constructor(private armazenamentoService: ArmazenamentoService, private router: Router) { 
    this.usuario = armazenamentoService.usuario;
  }

  ngOnInit(): void {
    this.usuario.autenticacao = false
  }

  fazerLogin(inputNome: HTMLInputElement, inputSenha: HTMLInputElement) {
    this.usuario.nome = inputNome.value;
    this.usuario.senha = inputSenha.value;

    this.armazenamentoService.verificarSenha()
    console.log(this.usuario.autenticacao);
    console.log(this.usuario.nome);

    if(this.usuario.nome == ''){
      this.mensagemErro = true;
      this.mensagem = 'Por favor, insira o seu nome completo.';
    } else if(this.usuario.senha == ''){
      this.mensagemErro = true;
      this.mensagem = 'Por favor, insira a senha do evento.';
    } else if(this.usuario.autenticacao == true){
      this.router.navigate(['/video-streaming']);
    } else{
      this.mensagemErro = true;
      this.mensagem = 'Senha do evento incorreta. Por favor, verifique com o organizador do evento.';
    }
    
  }

}
