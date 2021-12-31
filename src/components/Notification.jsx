
const Notification = (props) => {
    return (
        <>
        <div class='card' style={{'background-color':`${!props.details().isError?'lightgreen':'#dd4b40'}`}}>
        <div class='card-body text-center'>
            <h1>{props.details().isError?'Error':'Success'}</h1>
            <div class='h3'>
                { props.details().message }
            </div>
        </div>
    </div>
    </>
    )
}

export default Notification;