import React from 'react';
import {useEffect, useContext} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const UserRepos = (repos: any) => {
    
    console.log(repos, 'repos inside repos')
    const columns = [ {
         dataField: 'id',
         text: 'ID (Sortable)',
         sort: true
    },
    
    {
         dataField: 'name',
         text: 'Repo Name',
         filter: textFilter()
    },
    
    {
         dataField: 'stargazers_count',
         text: 'Stars (Sortable)' ,
         sort: true
    },
    
    {
         dataField: 'forks_count',
         text: 'Forks Count (Sortable)' ,
         sort: true
    },
    
    
    {
         dataField: 'language',
         text: 'Language',
         filter: textFilter()
    },
    
    {
         dataField: 'visibility',
         text: 'Visibility' 
    },
    
    
    {
         dataField: 'full_name',
         text: 'Full Name' 
    },
    ]
    
    const paginationOption = {
      totalSize: repos.repos.length
    };
    
    
    return(
        <>
        
          <BootstrapTable 
                 data = {repos.repos}
                 keyField = "id"
                 columns = {columns} 
                 striped
                 pagination= {paginationFactory(paginationOption)}
                 filter={filterFactory()}
                 />
        </>
        )
}

export default UserRepos