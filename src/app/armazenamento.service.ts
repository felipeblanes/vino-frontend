import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { isFormattedError } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {
  usuario = {
    nome: '',
    senha: '',
    autenticacao: false
  };

  constructor() { }

  verificarSenha() {
    const body = this.usuario;
    if(this.usuario.senha == "boipreto"){
      this.usuario.autenticacao = true
    } else{
      this.usuario.autenticacao = false
    }
  }
}
