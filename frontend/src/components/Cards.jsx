import React from 'react';


function Cards({ item }) {
  return (
    <div className='mt-7 cardInfo '>
    <div className="card w-96 bg-base-100 shadow-xl cardBody dark:bg-slate-900 dark:text-white dark:border">
        <figure style={{backgroundColor: "red"}}>
  <img src={item.image} alt="Shoes" />
</figure>

    <div className="card-body">
      <h2 className="card-title">
        {item.name}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p>{item.title}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline  py-5 px-5 rounded-md">${item.price}</div> 
        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer px-5 py-5 rounded-md">Buy Now</div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Cards;
