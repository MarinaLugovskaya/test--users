import {useState, useEffect} from 'react';
import {
  NavLink,
  useParams,
  rowserRouter as Router,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchUserById } from '../../services/Api';
import AppBar from '../../components/Navigation/Navigation';

import css from "../../components/Navigation/Navigation.module.css";
import style from "../../views/UserPage/UserPage.module.css";

export default function UserPage() {

const {userId} = useParams();
const [user, setUser] = useState(null);
const [error, setError] = useState(null)


useEffect(() => {
  fetchUserById(userId)
    .then(setUser)
    .catch(error => setError({ error }));
}, [userId]);

  return (
    <>
    <AppBar/>
    <NavLink exact to="/user/:userId">
{user &&
      <div className={style.section}>
                    <div className={style.sectionUsers__cont}>
                      <div className={style.container}>
                      

                      <img src={require("../../images/clark-van-der-beken-OvaPxvvFYNo-unsplash 1.png")}/>
              <img src={require("../../images/200 1.png")} className={style.user__img}/>
<div className={style.user__box}>
                      <h2 className={style.user__title}>{user.name}</h2>
                      <p className={style.user__txt}>{user.company.catchPhrase}</p>
                      </div>

<div className={style.user__cont}>
                      <h2 className={style.user__title}>Address</h2>
                      <p className={style.user__text}>{user.address.street}</p>

                      <h2 className={style.user__title}>Phone</h2>
                      <p className={style.user__text}>{user.phone}</p>

                      <h2 className={style.user__title}>Website</h2>
                      <a href='#' className={style.user__link}>{user.website}</a>
                      </div>
                      </div>
                      </div>  
                      </div>     
}</NavLink>
    </>
  );
}