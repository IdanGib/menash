import React from 'react';
import { useRouter } from 'next/router'

class InterviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { company: null };
        const name = this.props.company;
        const url = process.env.API_URL || 'http://localhost:3000';
        fetch(url + '/api/companies')
        .then(res => res.json()).then(companies => {
            this.setState({ company: companies.find(c => c.name === name) });
        });
     }

    render() {
        
        return <>
            
            <h1 className="text-center text-5xl capitalize p-5">
                Interview with { this.state.company ? this.state.company.name : '' } 
            </h1>
            <div className='flex flex-col items-center py-6'>
                
                { this.state.company ? this.state.company.interview.map( (i, key) => {
                    return <div className='m-3 p-3 border container max-w-lg' key={key}>
                        <h2 className='uppercase'>{i.stage}</h2>
                        <ul>
                        { i.questions.map((q, k) => <li className='my-1 p-1' key={k}>{q}</li>) }
                        </ul>
                   
                    </div>
                } ): '' }   
            </div>
        </>
    }
}

export default function Interview() {
    const router = useRouter()
    const { company } = router.query;
    return <InterviewComponent company={company}/>;
}