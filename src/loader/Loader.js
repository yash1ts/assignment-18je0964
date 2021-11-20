import './Loader.css';
function Loader({ loading }) {
    if (loading)
        return (
            <div className='loader'>
                <div className="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <div className='loader-txt'>Saving counter value</div>
            </div>
        )
    else return (
        <div className='loader-empty' />
    )
}

export default Loader;