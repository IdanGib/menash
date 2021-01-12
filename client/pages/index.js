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
      }).catch(err => {});
    }

    onSearchInput(event) {
        const val = event.target.value || '';
        const filtered = this.state.companies.filter(c => ( c.name.toLowerCase().includes(val) ));
        this.setState({ filtered });
    }

    render() {
      return <>
        <div className="w-full">
          <div className="relative w-full h-32 mb-10 bg-gray-100">
            <div className='text-center w-full pt-5 text-5xl capitalize'>Interview Questions</div>
            <div className="container w-full absolute bottom-0 right-0 left-0 mx-auto search-wrapper">
              <input id="search" 
                placeholder='search company'
                autoComplete="off" 
                onInput={ this.onSearchInput.bind(this) }
                className="block border rounded outline-none px-4 py-2 capitalize w-full"/>
            </div>
          </div>
          <div className='flex flex-col items-center container mx-auto px-4'>
          <div className='py-7 w-full'>
            <ul className='w-full flex flex-wrap flex-row justify-center'>
              { this.state.filtered.map((c, i) => (
                  <li key={i}>     
                    <Link href={'/interview?company=' + c.name }>
                      <a className="mr-4 block capitalize rounded cursor-pointer mb-4 border p-3 w-64 h-40">
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