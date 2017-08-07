import { Component, OnInit } from '@angular/core';

const SKILLS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'PHP' },
      { name: 'SQL' },
      { name: 'HTML' },
      { name: 'Javascript' },
      { name: 'Python' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'ZendFramework 1 & 2' },
      { name: 'Laravel' },
      { name: 'CodeIgniter 3' },
      { name: 'AngularJS' },
      { name: 'Angular (2)' },
      { name: 'jQuery' },
      { name: 'Tensorflow' }
    ]
  },
  {
    category: 'Web Servers',
    skills: [
      { name: 'Apache Web Server' },
      { name: 'NGINX' },
      { name: 'ExpressJS' }
    ]
  },
  {
    category: 'Host Environments',
    skills: [
      { name: 'AWS CloudFront, EC2' },
      { name: 'Azure App Deployment' },
      { name: 'Centos' },
      { name: 'RHEL' },
      { name: 'Ubuntu' },
      { name: 'Fedora' }
    ]
  },
  {
    category: 'Important Concepts',
    skills: [
      { name: 'Continuious Integration' },
      { name: 'OOP' },
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Query Optomization' },
      { name: 'Data Architecture' },
      { name: 'ORM' }
    ]
  },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList   = SKILLS;

  constructor() { }

  ngOnInit() {
  }

}
