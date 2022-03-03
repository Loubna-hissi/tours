import Tour from './Tour'
const Tours = ({tours,deleteTour}) => {
    return ( 
            <section >
                <div className="title" >
                <h3>our tours</h3>
                <div className="underline"></div>
                <div className='container' > 
                {tours.map((tour) => {
                    return <Tour tour={tour} deleteTour={deleteTour} key={tour.id}/>;
                    
                })}
                </div>
              </div>
            </section>
        
           );
}
export default Tours;