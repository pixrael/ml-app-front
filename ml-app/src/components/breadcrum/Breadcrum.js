import './Breadcrum.scss';

function Breadcrum(props) {


    const categorySections = props.categoryPath.map((category, index) => {

        const id = category.id;
        // const url = category.permalink; TODO add href

        const name = category.name;
        let separator = ' ';

        if (index !== props.categoryPath.length - 1) {
            separator = ' > ';
        }


        return (<a key={id}  > {`${name}${separator}`} </a>);
    });


    return (
        <div className="container-breadcrum" >
            <div className="breadcrum">
                {categorySections}
            </div>

        </div>

    );
}

export default Breadcrum;