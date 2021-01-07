import React from 'react';
import Link from 'next/link';

export default class Index extends React.Component {
    constructor(props) {
      super(props);
      const url = process.env.HOST || 'http://localhost:3000';
      fetch(url + '/api/companies')
      .then(res => res.json())
      .then(c => {
        const companies =  (c || []);
        this.setState({ companies, filtered: companies });
      }).catch(console.error);
      this.state = { companies: [], filtered: [] };
    }

    onSearchInput(event) {
        const val = event.target.value || '';
        const filtered = this.state.companies.filter(c => ( c.name.toLowerCase().includes(val) ));
        this.setState({ filtered });
    }

    render() {
      return <>
           <div className="container mx-auto px-4">
          <h1 className="text-center text-5xl capitalize p-5">
            Real ... 
          </h1>
          <div className="search-wrapper">
            <input id="search" 
                placeholder='search company'
                autoComplete="off" 
                onInput={ this.onSearchInput.bind(this) }
                className="block border shadow-md outline-none px-4 py-2 capitalize"/>
          </div>
          <div className='py-7'>
            <ul>
              { this.state.filtered.map((c, i) => (
                  <li key={i} className='flex items-center p-3'>        
                    <Link href={'/interview?company=' + c.name }>
                    <span className="mr-4 capitalize cursor-pointer">
                      { c.name }
                    </span>
                    </Link>
                    <img 
                        className="w-4 h-4 mr-3"
                        src={c.icon} 
                        onError={ (event) => (event.target.style.display='none') } />
                  </li>
              ))  }
            </ul>
          </div>
        </div>
      </>
    }

}