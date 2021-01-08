import React from 'react';
import Link from 'next/link';

class IndexComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        companies: [], 
        filtered: [] 
      };
      fetch('api/companies')
      .then(res => res.json()).then(companies => {
        const c = companies || [];
          this.setState({ companies: c, filtered: c });
      });
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
            Interview Questions
          </h1>
          <div className='flex flex-col items-center'>
          <div className="search-wrapper">
            <input id="search" 
                placeholder='search company'
                autoComplete="off" 
                onInput={ this.onSearchInput.bind(this) }
                className="w-80 block border shadow-md outline-none px-4 py-2 capitalize"/>
          </div>
          <div className='py-7 w-80'>
            <ul>
              { this.state.filtered.map((c, i) => (
                  <li key={i}>     
                    <Link href={'/interview?company=' + c.name }>
                      <a className="mr-4 block capitalize cursor-pointer mb-4 border p-3 w-full">
                        { c.name }
                      </a>
                    </Link>
                  </li>
              ))  }
            </ul>
          </div>
          </div>
         
        </div>
      </>
    }

}

export default function Index() {
  return <IndexComponent/>;
} 