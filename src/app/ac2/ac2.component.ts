import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-ac2',
 templateUrl: './ac2.component.html',
 styleUrls: ['./ac2.component.css']
})
export class Ac2Component implements OnInit {
 tasks: any[] = [
 { description: 'Estudar', concluida: true },
 { description: 'Academia', concluida: false },
 { description: 'LavarCarro', concluida: true },
 { description: 'Correr', concluida: false },
 { description: 'Jantar', concluida: true }
 ];
 constructor() { }
 ngOnInit(): void {
 }
 toggleCompletion(task: any): void {
 task.concluida = !task.concluida;
 }
}