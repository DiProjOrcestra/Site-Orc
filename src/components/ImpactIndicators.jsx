import '../css/ImpactIndicators.css';

function ImpactIndicators(){
    return(
        <>
        <div className="parallax">
            <div className="overlay">
                <div className="metrics-container">
            
                    <div className="metric-card">
                        <h2>+35</h2>
                        <p>Projetos realizados</p>
                    </div>
            
                    <div className="metric-card">
                        <h2>+10</h2>
                        <p>Anos de experiência</p>
                    </div>

                    <div className="metric-card">
                        <h2>1º</h2>
                        <p>Pioneiros em gamificação no MEJ</p>
                    </div>

                    <div className="metric-card">
                        <h2>9</h2>
                        <p>Média de NPS</p>
                    </div>

                    <div className="metric-card">
                        <h2>3x</h2>
                        <p>EJ Impacto</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default ImpactIndicators;