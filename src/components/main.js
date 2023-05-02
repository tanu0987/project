import './main.css';
function Card(){
    return (
        <section className="menu" id="menu">
            <div className="title">
                <h2 className="titleText">
                    Top Clients
                    
                </h2>
                
            </div>
            <div className="content">
                <div className="box">
                    <div className="imgBx">
                        <img src="image/woman1.jpg"/>
                    </div>
                    <div className="text">
                        <h3>Crystal</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="image/boy1.jpg"/>
                    </div>
                    <div className="text">
                        <h3>Joseph</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="image/woman2.jpg"/>
                    </div>
                    <div className="text">
                        <h3>Ashley</h3>
                    </div>
                </div>
                 <div className="box">
                    <div class="imgBx">
                        <img src="image/boy2.jpg"/>
                    </div>
                    <div className="text">
                        <h3>Steven</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="image/boy3.jpg"/>
                    </div>
                    <div class="text">
                        <h3>Jennifer</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="image/woman5.jpg"/>
                    </div>
                    <div className="text">
                        <h3>Daisy</h3>
                    </div>
                
                  </div>
                </div>

        </section>

    );
}
export default Card;