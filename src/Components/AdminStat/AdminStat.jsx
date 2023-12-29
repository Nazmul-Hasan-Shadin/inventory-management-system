import CountUp from 'react-countup';
import useAllProducts from '../../hooks/useAllProducts';
const AdminStat = ({title,value,bg,shop}) => {

    return (
        <div className='w-full'>
             <div className='' style={{color:'white'}} >
            <div  style={{backgroundColor:bg , color:'white'}} className="stats  w-full  overflow-x-hidden shadow">
  
            <div className="stat  place-items-center">
    <div className="stat-title text-white">{title}</div>
    <div className="stat-value text-white"> <span> {`${shop? '':'$'}`} </span>  <CountUp end={value}></CountUp> </div>
    <div className="stat-desc text-white">From January 1st to February 1st</div>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default AdminStat;