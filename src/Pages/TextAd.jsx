import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TextAd = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Submitted !', {
            position: toast.POSITION.TOP_RIGHT
        });

       
        setTimeout(() => {
            navigate('/createAds');
        }, 600);
    };
    return <>
 
        <div className="container border">
            <h3>Create Text & Media</h3>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Heading 01</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Heading 02</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="col"><div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description 01</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Business Name</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                        </div>
                        <div className="col"><div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Button Label</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div></div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Website URl</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="col text-end">
                        <input className="me-2 btn" type="button" value={'Go back'} style={{ background: 'skyblue', border: 'none', color: "white" }} onClick={() => navigate('/createAds')} />
                        <input
                            class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" style={{ background: 'skyblue', border: 'none', color: "white" }} /></div>

                </form>
               
            </div>
        </div>
    </>
}
export default TextAd