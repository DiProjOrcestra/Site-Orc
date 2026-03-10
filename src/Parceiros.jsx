import './Parceiros.css';

function Parceiros(){
    return(
        <>
        <div className='container-title'>
            <h1>Conheça quem nos apoia</h1>
        </div>
        <div className='container-subtitle'>
            <h2>Parceiros</h2>
        </div>
        <div className='container-parceiros'>
            <div className='carousel'>
                <div className='carousel-item'>
                    <img src="/assets/facto-logo.png" alt="Facto" />
                </div>
                <div className='carousel-item'>
                    <img src="/assets/360-logo.png" alt="360" />
                </div>
                <div className='carousel-item'>
                    <img src="/assets/associacao-bring.png" alt="Associação BRING" />
                </div>
                <div className='carousel-item'>
                    <img src="/assets/trinus-logo.png" alt="Trinus" />
                </div>
                <div className='carousel-item'>
                    <img src="/assets/brasil-junior-logo.png" alt="Brasil Júnior" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Parceiros;