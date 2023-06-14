import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Img_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { ClassName, email, instructorName, price, seats } = data;
                    const newItem = { ClassName, status: 'pending', Enrolled: 0, instructorName, email, price: parseFloat(price), seats: parseFloat(seats), image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/courses', newItem)
                        .then(data => {
                            console.log(data.data)
                        })
                }
            })
    }
    console.log(errors);
    return (
       

                </div >
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
                    <input type="email" placeholder="Type here" {...register("email", { required: true, maxLength: 80 })} value={user?.email} className="input input-bordered w-full max-w-xs" />

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
            </form >
        </div >
    );
};

export default AddClass;