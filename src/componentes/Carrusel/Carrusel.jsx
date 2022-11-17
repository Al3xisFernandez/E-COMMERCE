export const Carrusel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-zapatillas-GjGXSP.png" className="d-block w-70 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e5f7c67-2f7a-436c-9743-2dc481a41f1a/waffle-debut-zapatillas-gV9P67.png" className="d-block w-70 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a229b012-c62d-4f89-9ed2-3fca4bbe274a/air-jordan-1-retro-high-og-zapatillas.png" className="d-block w-70 img-fluid" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}