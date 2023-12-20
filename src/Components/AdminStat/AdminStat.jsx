import useAllProducts from '../../hooks/useAllProducts';
const AdminStat = ({title,value}) => {

    return (
        <div>
            <div className="stats  shadow">
  
            <div className="stat place-items-center">
    <div className="stat-title">{title}</div>
    <div className="stat-value">$ {value} </div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminStat;