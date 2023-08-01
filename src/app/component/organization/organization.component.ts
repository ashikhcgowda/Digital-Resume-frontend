import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HCSankey from "highcharts/modules/sankey";
import HCOrganization from "highcharts/modules/organization"

HCSankey(Highcharts)
HCOrganization(Highcharts)

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    chart:{
      height:250,
      inverted:true
    },

    series:[{
type:'organization',
keys: ['from','to'],
data:[
  {from:'CEO', to:'CTO'  },
  {from:'CEO', to:'CSO' }
],

nodes:[
  {
    id:'CEO',
    title:'CEO',
    name:'Angular'
  },
  {
    id:'CTO',
    title:'CTO',
    name:'Angular'
  },
  {
    id:'CSO',
    title:'CSO',
    name:'Angular'
  },
],

color:'#007ad0',
borderColor: 'white',
nodeWidth:65
    }]
  }
  
}
