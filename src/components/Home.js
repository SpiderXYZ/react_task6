import self from './avatar.jpg';
import './style.css';
export default function Home(){
    return(<div>
    <h1>Home Page</h1>
    <center>
    <div>
    <img src={self} alt="me" style={{height:"400px",width:""}}/>
        </div></center>
        <div>
            <p>Hello there! I am Sivakar Devarapalli, a student, currently pursuing my bachelors degree from VIT. I am interested in learning new technologies as the industry grows, my interests are not just limited to web dev but also extend to Data Science and Deep Learning.</p>
        </div>
    </div>
    )
}