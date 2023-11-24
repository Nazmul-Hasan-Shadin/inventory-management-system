
import { useForm } from "react-hook-form"
const CreateStore = () => {

    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <h2 className='text-2xl text-center'>Add book to database</h2>
    
     <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full" >
     <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input type="text" name='bookName' placeholder="Book Name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Books Image</span>
          </label>
          <input type="text" name='bookImg' placeholder="books image url" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name='quantity' placeholder="book quantity" className="input input-bordered" required />

        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input type="text" name='author' placeholder="Author Name" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">cate</span>
          </label>
             <select className="select select-info w-full max-w-xs">
            <option disabled selected>Select Category</option>
            <option>history</option>
            <option>comics</option>
            <option>health</option>
            <option>horror</option>
            </select>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="desc" placeholder="Short Description" className="input input-bordered" required />
   
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />

        </div>
     </div>

    
     <div className="form-control mt-6">
        
        <input type="submit" value={'Add Book'} className="btn btn-primary" />
      </div>
       
       

   

    </div>
  </div>
</div>
      </form>
    );
};

export default CreateStore;