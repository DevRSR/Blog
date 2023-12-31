import { useEffect, useState } from 'react';

const useFetch = (url) => {
  
 const [data, setdata] = useState(null)
  const [isPending, setPending] = useState(true);
   const [error, setError] = useState(null)
   
    useEffect(() => {
      
      const abortCont = new AbortController();
      
      setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch data right now')
        }
        return res.json();
      })
      .then(data => {
        setdata(data)
        setPending(false)
      })
      .catch(err => {
        if(err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
        setError(err.message)
        setPending(false)
        }
      })
      }, 1000);
      
      return () => abortCont.abort();
    }, [url])
    
    return { data, isPending, error}
}

export default useFetch;