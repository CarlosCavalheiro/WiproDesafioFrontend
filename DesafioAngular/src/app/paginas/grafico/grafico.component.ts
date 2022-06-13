import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto' 
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})

export class GraficoComponent implements OnInit {

  result: any;
  filmes: any;
  chart: any = [];
  rotuloFilme: any;
  votoFilme: any;
  
  constructor(private serviceAuth: AuthService) {  
  }
    
  ngOnInit(): void { 
    this.serviceAuth.getFilmes('popular').then((res) => {
      
      this.result = res;
      this.filmes = this.result.results; 

      this.rotuloFilme = this.filmes.map((item: any) => item.original_title);
      this.votoFilme = this.filmes.map((item: any) => item.vote_count);
      
      //console.log(this.rotuloFilme);
      //console.log(this.votoFilme);
      
      //Gráfico
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.rotuloFilme,
          datasets: [
            {
              data: this.votoFilme,
              borderColor: '#3e95cd',
              label: 'Total de Votos',
              backgroundColor: '#3e95cd',
              borderWidth: 1,
            },
          ],
        },
      });
      
    });

  }
}
