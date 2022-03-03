
const Tour = ({tour,deleteTour}) => {
        return (
          <article className="single-tour">
            <img src={tour.image} alt={tour.name} />
            <footer>
              <div className="tour-info">
                <h4>{tour.name}</h4>
                <h4 className="tour-price">${tour.price}</h4>
              </div>
              <p className="tour-info">{tour.info}</p>
              <button className="delete-btn" onClick={()=>deleteTour(tour.id)}>
                not interested
              </button>
            </footer>
          </article>
        );
      };
export default Tour;