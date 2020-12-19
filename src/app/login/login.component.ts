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

  constructor(private armazenamentoService: ArmazenamentoService, private router: Router) { 
    this.usuario = armazenamentoService.usuario;
  }

  ngOnInit(): void {
  }

  fazerLogin(inputNome: HTMLInputElement, inputSenha: HTMLInputElement) {
    this.usuario.email = inputNome.value;
    this.usuario.senha = inputSenha.value;

    console.log(this.usuario.email + " " + this.usuario.senha);  
    this.router.navigate(['/video-streaming']);

    this.armazenamentoService.verificarSenha()
    console.log(this.usuario.autenticacao);

  }

}
