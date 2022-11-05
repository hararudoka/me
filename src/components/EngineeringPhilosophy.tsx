import { PhilosophyValue } from 'model'
export function EngineeringPhilosophy ({ values, quotes }: { values: PhilosophyValue[], quotes: string[] }): JSX.Element {
  return (
    <>
      <section>
        <h1>Engineering Philosophy</h1>
        <p>Each value should be considered in its context + apply your judgment - *you are a human, not a machine*</p>
        {values.map((val, idx) => (
          <div key={idx}>
            <span className='text-primary'>{val.value}</span>
            <ul>
              {val.sub.map((sub, idx) => (
                <li className="m-2" key={idx}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
        <h1>Inspirational Quotes</h1>
        <ul>
          {quotes.map((quote, idx) => (
            <li key={idx} className="m-2">
              <span className='text-secondary'>
              {quote}
                </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
