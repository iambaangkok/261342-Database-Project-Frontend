import '../css/PopUp.css'
type Pop = {
    handleClose:Function,
    headText:String,
    contentText:String
}
function PopUp(props:Pop) {

    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={()=>{props.handleClose()}}>x</button>
                <div>
                    <div className='HeadText'>{props.headText}</div>
                    <div className='Text'>{props.contentText}</div>
                </div>
            </div>
            
        </div>
    )

}
export default PopUp