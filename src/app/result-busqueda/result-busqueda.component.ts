import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { UserInterface } from '../user-interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-result-busqueda',
  templateUrl: './result-busqueda.component.html',
  styleUrls: ['./result-busqueda.component.css']
})
export class ResultBusquedaComponent implements OnInit {

  searchResults: UserInterface;
  searchQuery: string;
  displayQuery: string;
  title:string;
  page:string;

  constructor(private GitSearchService: GitSearchService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      if(params.get('page'))
        this.page = params.get('page');
      else
        this.page = "0";
      this.gitSearch();
    })
    this.route.data.subscribe((result) => {
      this.title = result.title
    });

  }

gitSearch =()=>{
  this.GitSearchService.gitFindUsers(this.searchQuery, this.page).then((response)=>{
    this.searchResults = response;
    this.displayQuery= this.searchQuery;
    //alert('Total repositories found: '+response.total_count);
  },(error) => {
    alert('Error: '+ error.statusText);
  })
  

}

}