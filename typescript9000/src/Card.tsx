
type product = {
    id: number;
    title: string;
    description: string;
    images: string[];
    price: number;
    discountPercentage: number;

};


function Card(props: product) {


    return (
        <>
            <div className="card">
                <p>{props.title}</p>
                <p>{props.description}</p>
            </div>

        </>
    )
}


export { Card }