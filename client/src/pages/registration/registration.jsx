import "./registration.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = ({ inputs }) => {
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({})

    const handleChange = e => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleclick = async e => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "upload")
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dhysyf9wr/image/upload", data);
            const { url } = uploadRes.data;

            const newUser = {
                ...info,
                img: url,
            };

            await axios.post("/auth/register", newUser);
        } catch (err) {
            console.log(err);
        }
        toast.success('Registration Success!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        const reloadWindow = setTimeout(reload, 4000);


        function reload() {
            window.location.reload(false)
        };

        

    };


    return (
        <div className="registration {
">

            <div className="rContainer">

                <div class="title"><span>Registration</span></div>
                <div className="bottom">
                    <div className="user-img">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="reg">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    <span id="upload">Image: <img src="https://cdn4.iconfinder.com/data/icons/social-media-impact/142/add_photo_-256.png" alt="upload" /></span>
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="rInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input onChange={handleChange} type={input.type} placeholder={input.placeholder}
                                        id={input.id}
                                    />
                                </div>
                            ))}
                            <button className="button" onClick={handleclick}>Registration</button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
