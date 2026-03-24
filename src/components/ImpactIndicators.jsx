import '../css/ImpactIndicators.css';

function ImpactIndicators(){
    return(
        <>
        <div className="parallax">
            <div className="overlay">
                <div className="metrics-container">
            
                    <div className="metric-card">
                        <h2>+35</h2>
                        <p>Projetos executados</p>
                    </div>
            
                    <div className="metric-card">
                        <h2>+8</h2>
                        <p>Anos de atuação</p>
                    </div>

                    <div className="metric-card">
                        <h2>1º</h2>
                        <p>EJ de Gamificação</p>
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