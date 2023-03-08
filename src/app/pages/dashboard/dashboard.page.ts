import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {
  @ViewChild('myChart1') myChart1Ref!: ElementRef;
  @ViewChild('myChart2') myChart2Ref!: ElementRef;
  @ViewChild('myChart3') myChart3Ref!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const ctx1 = this.myChart1Ref.nativeElement.getContext('2d');
    const ctx2 = this.myChart2Ref.nativeElement.getContext('2d');
    const ctx3 = this.myChart3Ref.nativeElement.getContext('2d');
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['IMEPay', 'IMERemit', 'CallNotConnected'],
        datasets: [{
          data: [834, 753, 186],
          backgroundColor: ['#FF5429', '#36A2EB', '#FFCE56']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
      }
    });
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Urgent', 'High'],
        datasets: [{
          data: [400, 353],
          backgroundColor: ['#FF1234', '#BADA55']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
      }
    });
    new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['inProgress', 'closed', 'raisedAndDisconnected', 'closedCallNotConnected'],
        datasets: [{
          data: [10, 110, 45, 21],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#321FED']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
      }
    });

  }
  
}