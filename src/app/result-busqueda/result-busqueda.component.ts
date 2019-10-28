import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-result-busqueda',
  templateUrl: './result-busqueda.component.html',
  styleUrls: ['./result-busqueda.component.css']
})
export class ResultBusquedaComponent implements OnInit {

  searchResults: UserInterface;
  searchQuery: string;
  displayQuery: string;

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
   this.searchQuery = 'pedro'
   this.displayQuery = this.searchQuery;
   this.gitSearch();
  }

gitSearch =()=>{
  this.GitSearchService.gitFindUsers(this.searchQuery).then((response)=>{
    this.searchResults = response;
    this.displayQuery= this.searchQuery;
    //alert('Total repositories found: '+response.total_count);
  },(error) => {
    alert('Error: '+ error.statusText);
  })
  

}

}