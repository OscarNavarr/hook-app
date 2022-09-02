import { useCounter, useFetch  } from '../hooks';
import { LoandingQuote, Quote } from '../03-examples';

export const Layout = () => {
    
    const {counter, increment, decrement, reset} = useCounter();
    const { data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/'+ counter)
    

  const {author, quote} = !!data && data[0];
  
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
        
        {
            isLoading
                ?<LoandingQuote/>                  
                :<Quote quote={quote} author={author}/>
        }

        <button className='btn btn-primary'
                disabled={isLoading} 
                onClick={() => increment(1)}>
            Next quote
        </button>

    </>
  )
}
