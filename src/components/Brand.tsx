import '../css/Brand.css'

type BrandProps={
    variant:"solid-black" | "transparent-white",
}

function Brand({variant}:BrandProps) {

    var BrandClass = "Brand Brand-" + ((variant === "solid-black")? "black" : "white")

    return (
        <div className={BrandClass}>
            <div className='TopText'>
                Estelle La Cour
            </div>
            <div className='BottomText'>
                Antique Models
            </div>
        </div >
    )
}

export default Brand