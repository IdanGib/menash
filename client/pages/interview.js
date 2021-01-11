import React from 'react';
import { useRouter } from 'next/router'

class InterviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { company: null };
        const name = this.props.company;
        fetch('api/companies')
        .then(res => res.json()).then(companies => {
            this.setState({ company: companies.find(c => c.name === name) });
        });
     }

    render() {
        
        return  <>
            
            <div className="flex flex-col items-center capitalize p-5">
                <div>
                    <div className='text-5xl'>{ this.state.company ? this.state.company.name : '' }</div> 
                    <div className="text-md opacity-40 capitalize">
                    interview path
                    </div>
                </div>
            </div>
 
            <div className='flex flex-col items-center'>
 
            <div className='container max-w-lg'>
                { this.state.company ? this.state.company.interview.map( (i, key) => {
                    return <div className='m-3 p-3 border' key={key}>
                        <h2 className='uppercase'>{i.stage}</h2>
                        <ul>
                        { i.questions.map((q, k) => (<li className='my-1 p-1 whitespace-pre-line' key={k}>
                            { q.startsWith('code:') ? <code>{q}</code> : <span>{q}</span> }
                        </li>)) }
                        </ul>
                    
                    </div>
                } ): '' }   
            </div>
     
            </div>
        </>
    }
}

export default function Interview() {
    const router = useRouter()
    const { company } = router.query;
    return  company ? <InterviewComponent company={company}/> : <><div></div></>;
}