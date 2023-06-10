import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from 'react-hook-form';


const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };
    console.log(errors);
    return (
        <div > <h3 className="text-center font-serif font-bold text-2xl">Add a Class</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Class name</span>
                    </label>
                    <input type="text" placeholder="Type here"
                        {...register("ClassName", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Add Image</span>

                    </label>
                    <input type="file" {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("instructorName", { required: true, maxLength: 80 })} value={user?.displayName} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor email</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("instructorEmail", { required: true, maxLength: 80 })} value={user?.email} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Available seats</span>
                    </label>
                    <input type="number" placeholder="Type here" {...register("seats", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" placeholder="Type here" {...register("price", { required: true, maxLength: 80 })} className="input input-bordered w-full max-w-xs" />

                </div>
                <input className="btn btn-outline text-center" type="submit" value="Add This" />
            </form>
        </div>
    );
};

export default AddClass;