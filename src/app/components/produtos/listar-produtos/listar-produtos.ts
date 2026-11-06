import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
 
  nome: string = '';
  validade: string = '';
  preco: number = 0;

  
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNUmeros: number[] = [15, 15.18, 100];

  nomeCompleto: string= "mafedri";
  nomeCompleto1:string="Maria Fernanda";

  objetoModelo = {
    nome: 'Mafe',
    idade: 19,
    altura: 1.66,
    graduado: true
  };

  listarProdutos: any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2}, 
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31'},    
  ]

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }

    for (const item of this.listaNUmeros){
      console.log(item);
    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);   
  }
}