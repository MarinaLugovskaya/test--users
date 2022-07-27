import { fetchUsers} from '../../services/Api';
import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import AppBar from '../../components/Navigation/Navigation';
import css from "../../components/Navigation/Navigation.module.css";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // const {url} = useRouteMatch();

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(error => setError({ error }));
  }, []);

  return (
  <> 
    <AppBar />
          <section className={css.sectionUsers}>
<div className={css.container}>
          <div className={css.sectionUsers__cont}>
            <div className={css.sectionUsers__flex}>
<h2 className={css.sectionUsers__title}>All users</h2>
<button type="button" className={css.sectionUsers__button}>
  <svg className={css.sectionUsers__svg}></svg> Sort
</button>
</div>
<table className={css.sectionUsers__table}>
<tr className={css.sectionUsers__list}>
<div className={css.sectionUsers__box1}>
  <th className={css.sectionUsers__text}>User details</th>
  <div className={css.sectionUsers__headBox}>
  <th className={css.sectionUsers__text}>Company name</th>
  <th className={css.sectionUsers__text}>Email</th>
  <th className={css.sectionUsers__text}>Distance</th>
  </div>
  </div>
</tr>
<>
{users && (
<tr className={css.sectionUsers__list}>
    {users.map((user) => (
     <div className={css.sectionUsers__box}>
      <td key={user.id} className={css.sectionUsers__item}>
        <div className={css.sectionUsers__itemBox}>
                   <NavLink to={`/user/${user.id}`} className={css.sectionUsers__link}> 
                   

                   <img className={css.sectionUsers__img} src={require("../../images/1.png")} width="44"
            height="44" alt="Leanne Graham"/>
          <div className={css.sectionUsers__titleBox}>
            <h3 className={css.sectionUsers__titles}>
              {user.name}
            </h3>
            <p className={css.sectionUsers__txt}>{user.address.city}</p>
          </div>
        </NavLink>
        </div>
        </td>
        <div className={css.sectionUsers__tableBox}>
        <td className={css.sectionUsers__company}>
        <h3 className={css.sectionUsers__titles}>{user.company.name}</h3>
        <p className={css.sectionUsers__txt}>{user.company.bs}</p>
        </td>

<td className={css.sectionUsers__row}>
       <div className={css.sectionUsers__rowBlock}> 
        <h3 className={css.sectionUsers__titles}>{user.email}</h3>
        <p className={css.sectionUsers__txt}>{user.website}</p>
       </div>
    </td>
    <td class={css.sectionUsers__btnBox}> <button type="button" className={css.sectionUsers__distance}>high</button>
    <svg className={css.sectionUsers__tableSvg}></svg>
    </td>
    </div>
    </div>
    ))}
  </tr>
)}
</>
</table>
</div>
</div>
</section>



<section className={css.section__view}>
<div className={css.container}>
  <div className={css.container__Flex}>
          <div className={css.container__border}>
          <div className={css.container__title}>
          <div className={css.container__flexBox}>
           <h3 className={css.sectionUsers__title}>Unresolved tickets</h3>
           <a href="#" className={css.container__link}>View details</a></div>
           <p className={css.sectionUsers__txt}>Group:<span className={css.txt}>Support</span></p>
           </div>
          <table className={css.container__table}>
  <tr>
            <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>Waiting on Feature Request</td>
    <td className={css.containerTxt}>4238</td>
  </div>
  </tr>
  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>Awaiting Customer Response</td>
    <td className={css.containerTxt}>1005</td>
  </div>
  </tr>

  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>Awaiting Developer Fix</td>
    <td className={css.containerTxt}>914</td>
  </div>
  </tr>
  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>Pending</td>
    <td className={css.containerTxt}>281</td>
  </div>
  </tr>
</table>



</div>


<div className={css.container__border}>
          <div className={css.container__title}>
            <div className={css.container__flexBox}>
           <h3 className={css.sectionUsers__title}>Tasks</h3>
           <a href="#" className={css.container__link}>View all</a></div>
           <p className={css.sectionUsers__txt}>Today</p>
           </div>
          <table className={css.container__table}>
  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titl}>Create new task</td>
    <td className={css.containerTxt}>
      <button className={css.container__btn}>+</button>
    </td>
  </div>
  </tr>
  <tr>
  <div className={css.container__item}>

    <td className={css.sectionUsers__titles}>
      <div className={css.container__checkbox}>


  <label className={css.check}>
<input className={css.check__input} type="checkbox" checked/>
<span className={css.checkBox}></span>
  <p className={css.checkBox__text}>Finish ticket update</p>
  </label>

</div></td>
    <td className={css.containerTxt}><button type="button" className={css.btn1}>Urgent</button></td>
  </div>
  </tr>

  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>
    <label className={css.check}>
<input className={css.check__input} type="checkbox" checked/>
<span className={css.checkBox}></span>
  <p className={css.checkBox__text}>Create new ticket example</p>
  </label>
    </td>
    <td className={css.containerTxt}><button type="button" className={css.btn2}>New</button></td>
  </div>
  </tr>
  <tr>
  <div className={css.container__item}>
    <td className={css.sectionUsers__titles}>
    <label className={css.check}>
<input className={css.check__input} type="checkbox" checked/>
<span className={css.checkBox}></span>
  <p className={css.checkBox__text}>Update ticket report</p>
  </label>
    </td>
    <td className={css.containerTxt}><button type="button" className={css.btn3}>Default</button></td>
  </div>
  </tr>
</table>


</div>
</div>
</div>
</section>
</>
  );
}