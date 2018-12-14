import React from 'react';

const Content = () => {
    return (
        <div className="content-box">
        <div className="home-hero">
            <div className="home-hero__text animated bounceInLeft"><h1 style={{color:'#004199'}}>Imagine.{" "}</h1><h1 style={{color:'#1A6CCC'}}>Believe.{" "}</h1><h1 style={{color:'#3398FF'}}>Create.</h1></div>
        </div>
        <div className="hero"><div className="home-hero__text animated bounceInLeft"><h1 style={{color:'#004199'}}>Imagine.{" "}</h1><h1 style={{color:'#1A6CCC'}}>Believe.{" "}</h1><h1 style={{color:'#3398FF'}}>Create.</h1></div></div>
        <div className="home-hero__service">
            
                <div className="col">
                    <div id="hexagon">
                        <img src="https://picsum.photos/100" class="animated zoomIn"/>
                    </div>
                    <h4 class="text-center">Marketing and Research</h4>
                </div>
                <div className="col">
                    <div id="hexagon">
                        <img src="https://picsum.photos/100" class="animated zoomIn"/>
                    </div>
                    <h4>Single Page React Apps</h4>
                </div>
            
                <div className="col">
                    <div id="hexagon">
                        <img src="https://picsum.photos/100" class="animated zoomIn"/>
                    </div>
                    <h4>UX and Interface Design</h4>
                </div>
                <div className="col">
                    <div id="hexagon">
                        <img src="https://picsum.photos/100" class="animated zoomIn"/>
                    </div>
                    <h4>Backend Technologies</h4>
                </div>
            </div>
        </div>
    )
}

export default Content;
