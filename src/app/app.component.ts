import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CROSS';

  obj = {
    image: '',
    status: false,
    name: '',
  }
  alternative: boolean = true;
  stop:boolean=false;

  arr: any[3][3] = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];

  constructor() { }

  ngOnInit(): void {

  }
  onClick(i: number, j: number) {
    console.log('hi');
    if (this.alternative) {
      this.obj.name = 'circle';
      if (!this.arr[i][j].status) {
        if (this.obj.name == 'circle') {
          this.obj.image = '../assets/cicle.png';
          this.obj.status = true;
          this.arr[i][j] = { ...this.obj };
          // console.log(this.arr);
        }
      }
      this.alternative = false;
    }
    else {
      this.obj.name = 'cross';
      if (!this.arr[i][j].status) {
        if (this.obj.name == 'cross') {
          this.obj.image = '../assets/cross.png';
          this.obj.status = true;
          this.arr[i][j] = { ...this.obj };
          // console.log(this.arr);
        }
      }
      this.alternative = true;
    }

    // below for cut 
    let line=document.getElementById('line');
    for (let i = 0; i < this.arr.length; i++) {
      if ((this.arr[i][0].name == this.arr[i][1].name) && (this.arr[i][2].name == this.arr[i][0].name) && this.arr[i][0].name != undefined) {
        if(line){
          line.style.top=(100+(i*200)).toString()+'px';
          line.style.left='0px';
          line.style.animationPlayState='running';
          line.style.width='100%';
        }
        this.stop=true;
      }
      else if ((this.arr[0][i].name == this.arr[1][i].name) && (this.arr[2][i].name == this.arr[0][i].name) && this.arr[0][i].name != undefined) {
        // console.log('vertical win', i);
        if(line){
          // line.style.width='2px';
          line.style.width='100%';
          line.style.transform='rotate(90deg)';
          line.style.animationPlayState='running';
          line.style.transformOrigin='0px 0px';
          line.style.left=(100+(i*200)).toString()+'px';
        }
        this.stop=true;
      }
      else if (((this.arr[0][0].name == this.arr[1][1].name) && (this.arr[2][2].name == this.arr[0][0].name) && this.arr[0][0].name != undefined) ) {
        // console.log('cross win', i);
        if(line){
          line.style.top='0px';
          line.style.left='0px';
          line.style.transform='rotate(45deg)';
          line.style.transformOrigin='0px 0px';
          line.style.animationPlayState='running';
          line.style.width=Math.sqrt((600*600)+(600*600)).toString()+'px';
        }
        this.stop=true;
        break;
      }
      else if(((this.arr[0][2].name == this.arr[2][0].name) && (this.arr[2][0].name == this.arr[1][1].name) && this.arr[2][0].name != undefined)){
        if(line){
          line.style.left='600px';
          line.style.rotate='135deg';
          line.style.transformOrigin='0px 0px';
          line.style.animationPlayState='running';
          line.style.width=Math.sqrt((600*600)+(600*600)).toString()+'px';
        }
        this.stop=true;

        break;
      }
    }
  }


}
