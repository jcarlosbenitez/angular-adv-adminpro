import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });

    // const promesa =  new Promise((resolve, reject) => {
    //   if(false){
    //   resolve('Hola Mundo');
    //   }
    //   else{
    //     reject('Algo salio mal')
    //   }
    // })

    // promesa.then((msg) => {
    //   console.log(msg)
    // }).catch((error) => {
    //   console.log('Error en mi promesa '+ error)
    // })
    // console.log('fin del init')
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}