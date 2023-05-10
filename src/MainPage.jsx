import react from 'react';
import './MainPage.css';
const MainPage = () => {


    return(
        <div>
        <div class="header">
        <div class="Lhead">
            <li><img class="weblogo" src="./images/daelimlogo.png"/></li>
        </div>
        <div class="Rhead">
            <img src="images/masages.png"/>
            <img src="images/my.png"/>
        </div>
    </div>
    <div class="Menu">
        <li><a href="#" target="_self"><img src="images/world.png"/>World Cup</a></li>
        <li><a href="#" target="_self"><img src="images/date.png"/>Blind Date</a></li>
    </div>
    <div id="wrapper">
        <div class="Maincard" id="men">
          <header>
            <h3>Men</h3>
          </header>

        </div>
        <div class="Maincard" id="girl">
          <header>
            <h3>Girl</h3>
          </header>

        </div>
        <div class="Maincard" id="com">
            <header>
              <h3>Comming Soon</h3>
            </header>

          </div>
          <div class="Maincard" id="com">
            <header>
              <h3>Comming Soon</h3>
            </header>
          </div>
    </div>
    <div id="Bwrapper">
        <div class="Bcard">
            <div class="Notice">
                <header>
                    <h3>Notice</h3>
                </header>
                <ul class="Lnotice"> 
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
            </div>
        </div>
        <div class="Bcard">
            <div class="Rank">
                <header>
                    <h3>Rank</h3>
                </header>
                <ul class="Rankli"> 
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer">    
        <div id="bottomMenu">
          <ul>
            <li><a href="#">회사 소개</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">약관</a></li>
            <li><a href="#">사이트맵</a></li>
          </ul>
          
          </div>
        </div>
        <div id="company">
          <p>경기도 수원시 권선구  (대표전화) 123-456-7890</p> 
        </div>     
      </div>
 
    )

}

export default MainPage